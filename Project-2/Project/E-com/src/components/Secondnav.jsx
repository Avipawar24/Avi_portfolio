import React from 'react'
import './Secondnav.css'

export const Secondnav = () => {
  return (
    <div>
              <div className="second-navbar">
        <div className="image">
          <img src="https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg?width=460" alt=""/>
        </div>
        <p>Categories</p>
        <p>Deals</p>
        <p>New & featured</p>
        <p>Pickup & delivery</p>
       <div className="searchbar">
        <input type="text" placeholder="What can we help you find?"/>
       </div>
       <i className="ri-contacts-line"></i>
       <i className="ri-shopping-cart-line"></i>
      </div>
    </div>
  )
}
