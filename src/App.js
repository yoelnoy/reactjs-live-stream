import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './components/screens/homeScreen/HomeScreen'
import LoginScreen from './components/screens/loginScreen/LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './components/screens/profileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //Logged In
          dispatch(
            login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        //Logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  } ,[dispatch])
  return (
    <div className="App">
    <Router>
      {!user ? 
      <LoginScreen /> :
      <Switch>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
      }
      </Router>
    </div>
  );
}

export default App;
