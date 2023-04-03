import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="nav-container">
          <div className="wave-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
            />
            <h1>Wave</h1>
          </div>

          <ul className="un-ordered-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </>
    )
  }
}
