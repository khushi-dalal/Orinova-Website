import React from 'react'
import founder from "../src/Assets/images/Dr.-Sourabh-Kumar.png"
import certificate from "../src/Assets/images/certificate.png"
import Footer from "./components/footer";
import { Element } from 'react-scroll';
import { Bounce, Fade, Flip, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";
import WhyUs from "./components/whyus.js";
import bg1 from "../src/Assets/images/background4.png";

export default function About() {
  return (
    <div> {/* Wrap the contents in a container div */}
      <header style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        <div className='about'>
          <Element name="topOfAboutUs">
            <h2>Who We are?</h2>
          </Element>
          <p>
          Orinova is a reputable web application development firm that has years of experience offering clients specialized solutions. We have expertise in every phase of web app development, from conception to completion, and we have won multiple industry awards for the excellence of our work. Using market-leading technologies, We are committed to offering web application development services.
          <br></br><br></br>
          Furthermore, we are a full-stack supplier of bespoke web app development for market leaders, growing and emerging online businesses with technology at their heart. We assist you in integrating the mobile-centric nature of the web and converting antiquated systems into cutting-edge cross-platform apps.
          </p>
        </div>
        <div className="founder-container"> {/* Container for image and text */}
          <img src={founder} alt="Founder" id='founder' />
          <p>Founder and Chairman</p>
        </div>
      </header>
      <WhyUs />
      <div className='section-light'>
        <img src={certificate} alt="certificate" id='certificate' />
      </div>
      <Fade>
        {/* Footer */}
        <Footer />
      </Fade>
    </div>
  );
}
