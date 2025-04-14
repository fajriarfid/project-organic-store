import "../styles/Header.css";
import logo from "../assets/organic-logo.png";
import { FaShoppingBag, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img
              src={logo || "/placeholder.svg"}
              alt="Organic Store"
              className="logo"
            />
          </a>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                Everything
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Groceries
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Juice
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <div className="cart-container">
            <a href="#" className="cart-link">
              <span className="cart-price">$0.00</span>
              <FaShoppingBag className="cart-icon" />
              <span className="cart-count">0</span>
            </a>
          </div>
          <a href="#" className="user-link">
            <FaUser className="user-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
