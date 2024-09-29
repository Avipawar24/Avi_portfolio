import React from 'react'
import './Navbartop.css'
export const Navbartop = () => {
  return (
    <div>
              <div id="navbar">
          <div className="top-left-nav">
            <div className="backhover">
            <i className="ri-map-pin-line"></i>
              <a href="">Ship to 41350</a>
            </div>
           <div className="backhover">
            <i className="ri-community-line"></i>
            <a href="">Seattle Pike Plaza</a>
           </div>
          </div>
          <div className="top-right-nav">
            <button className="nav-btn">SignUp</button>
            <button className="nav-btn">SignIn</button>
          </div>
      </div>
    </div>
  )
}
