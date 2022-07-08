import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div className='nav'>
    <Link to="/">Album</Link>
    <Link to={{
      pathname: "/form",
      state: {
        fromNavigation: true
      }
    }}>
      Form</Link>
  </div>
)
}

export default Navigation;