import React from 'react'

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://i.pinimg.com/1200x/48/f0/e9/48f0e97fd98c9bd5065a1b558f5d570e.jpg" alt="image" width="200" height="80"/>
      </a>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
  )
}

export default Navbar