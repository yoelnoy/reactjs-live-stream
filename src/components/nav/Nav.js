import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';
import logo from '../../media/logo.png';

export default function Nav() {

  const [show, setShow] = useState(false);
  const history = useHistory();
  
  const transitionNavbar = () => {
    if(window.scrollY > 100 ) {
      setShow(true);
    }else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img 
          onClick={() => history.push('/')} 
          className="nav__logo" 
          src={logo} 
          alt="" />
        <img 
          onClick={() => history.push('/profile')}
          className="nav__avatar" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="" />
      </div>
    </div>
  )
}
