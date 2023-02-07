import React from 'react'
import "./topbar.css"

const Topbar = () => {
  return (
    <>
      <div className="top">
          <div className="wrapper">
            <div className="logo">
                <h3>Achuchi.</h3>
            </div>
            <div className="my_links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contanct</li>
                </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default Topbar