// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-menu-header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="log-img"
        alt="wave"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <ul className="nav-item-lists-container">
      <li className="item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
