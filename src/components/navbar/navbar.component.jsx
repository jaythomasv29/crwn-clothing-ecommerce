import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as BrandLogo } from "../../assets/crown.svg"

import "./navbar.styles.scss"
const Navbar = () => {
  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BrandLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          <Link className="nav-link" to="/auth">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar