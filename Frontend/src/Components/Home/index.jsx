import {Link} from 'react-router-dom'

import './index.css'


const Home = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">NUTRITIONAL HEALTH SUPPLEMENTS</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Nuturemite is a website that offers credible information, 
        which helps you in making healthy eating choices. It serves as a 
        gateway and provides reliable information on nutrition, healthy eating, 
        physical activity and food safety for consumers. Our website receives guidance
         from professionals like doctors, nutritionist, dietitians, fitness gurus and the best nutrition counsellors,
          who work as a team for making the healthy society.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home