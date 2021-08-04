import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/counter/userSlice';
import ClipLoader from "react-spinners/ClipLoader";
import db from '../../../Firebase';
import key from '../../../keys';
import './PlansScreen.css'

export default function PlansScreen({ setCurrentPlan }) {

  const[products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [loader, setLoader] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("customers").doc(user.uid).collection("subscriptions").get().then((querySnapshot) => {
      querySnapshot.forEach(async (subscription) => {
        setSubscription({
          role: subscription.data().role,
          current_period_end: subscription.data().current_period_end.seconds,
          current_period_start: subscription.data().current_period_start.seconds
        });
        setCurrentPlan(subscription.data().role);
      })
    })
  }, []);


  useEffect(() => {
    db.collection('products').where('active', '==', true)
    .get().then((querySnapshot) => {
      const products= {};
      querySnapshot.forEach(async productDoc => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await productDoc.ref.collection('prices').get();
        priceSnap.docs.forEach(price => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data()
          }
        })
      });
      setProducts(products);
    })
  }, [])

  const loadCheckout = async (priceId) => {
    console.log("going 1");
    const docRef = await db.collection('customers').doc(user.uid).collection("checkout_sessions").add({
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });

    docRef.onSnapshot(async(snap) => {
      console.log("going 2");
      {snap? setLoader(true) : setLoader(false)}
      const { error, sessionId } = snap.data();

      if(error) {
        alert(`An error occured: ${error.message}`);
      }

      if(sessionId) {
        console.log("going 3");
        const stripe = await loadStripe(key);
        stripe.redirectToCheckout({ sessionId });
      }
    })
  }

  return (
    <div className="planScreen">
      {loader ? (
        <div className="planScreen__loader">
          <ClipLoader color="red" loading={loader}  size={150}/>
        </div>
      ) : (
        <div>
        {subscription && (
        <p>Renewal date: {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

        return (
          <div key={productId} className={`${isCurrentPackage && "planScreen__plan-disabled"} planScreen__plan`}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        )
      })}
        </div>
      )}
      
    </div>
  )
}
