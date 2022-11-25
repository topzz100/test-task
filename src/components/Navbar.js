import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
        <div className="container-fluid ">
          <Link to = {'/'}>
            <span className="navbar-brand mb-0 h1">HOME</span>
          </Link>
          <Link to={"/add-agenda"}>
            <span className="navbar-brand mb-0 mx-2 h1">ADD AGENDA</span>
          
          </Link>
            
        </div>
    </nav>
  )
}

export default Navbar