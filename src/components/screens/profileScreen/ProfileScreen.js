import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/counter/userSlice'
import { auth } from '../../../Firebase'
import Nav from '../../nav/Nav'
import PlansScreen from '../plansScreen/PlansScreen'
import './ProfileScreen.css'

export default function ProfileScreen() {

  const user = useSelector(selectUser);
  const [currentPlan, setCurrentPlan] = useState("");
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScrren__plans">
              <h3>{`Plans ${currentPlan && "(Current Plan: " + currentPlan +")"}`}</h3>
              <PlansScreen setCurrentPlan={setCurrentPlan}/>
              <button 
                onClick={() => auth.signOut()}
                className="profileScrren__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
