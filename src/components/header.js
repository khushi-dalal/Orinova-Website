import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import bg1 from "../Assets/images/background4.png";

function Header() {
  return (
    <Slide direction="down">
      <header
        className="header"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero">
          <h2>Seamless Delivery of IT, Web and Mobile App Projects</h2>
          <p>
            We leverage the Web and mobile App opportunity to create a solid
            end-user experience to urge your brand’s augmentation.
          </p>
          <Link smooth to="/About">
            <button>Read More</button>
          </Link>
          &nbsp;
          <Link smooth to="/#contactContainer">
            <button>Get a Quote</button>
          </Link>
        </div>
      </header>
    </Slide>
  );
}

export default Header;
