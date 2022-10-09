import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        My Praject
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item "></li>
          <li className="nav-item">
            <a className="nav-link" href="/Movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Customers">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Post/List">
              PostList
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Rentals">
              Rentals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
