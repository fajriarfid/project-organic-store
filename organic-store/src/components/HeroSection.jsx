import "../styles/HeroSection.css";
import productsImage from "../assets/organic.png";
import leafIcon from "../assets/organic-logo.png";
import { FaShoppingBag } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src={productsImage || "/placeholder.svg"}
            alt="Organic Products"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <div className="leaf-decoration"></div>

          <div className="quality-badge">
            <img
              src={leafIcon || "/placeholder.svg"}
              alt=""
              className="leaf-icon"
            />
            <p className="quality-text">Best Quality Products</p>
          </div>

          <h1 className="hero-title">Join The Organic Movement!</h1>

          <p className="hero-description">
            "Join The Organic Movement!" sounds fresh and inspiring — perfect
            for promoting healthy living, sustainable farming, or eco-conscious
            products.
          </p>

          <button className="shop-button">
            <FaShoppingBag className="button-icon" />
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
