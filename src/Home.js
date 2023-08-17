import React, { useState } from "react";
import Header from "./components/header";
import Section from "./components/details";
import MiniSection from "./components/section";
import Question from "./components/miniSection(questions)";
import CardSection from "./components/cardSection";
import Footer from "./components/footer";
import WhyUs from "./components/whyus.js";
import DigitalMarketing from "./components/digitalmarketing";
import design from "../src/Assets/images/design-animation.png"

// Images & gifs
import team from "../src/Assets/images/Team Image.png"
import rocket from "../src/Assets/images/Rocket.gif"
import fastMessaging from "../src/Assets/images/fast messaging.png"
import { Bounce, Fade, Flip, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";
import Contact from "./components/Contact";

function Home(){
    return (
        <>
            <Header />
            <div className="main" id="main" >
                <Slide direction="right">
                <Section
                className="section-light" 
                image = {team}
                title = "Uplift your business opportunity with us"
                content = "We believe in performance, which is a strong predictor of success in various applications such as Web, Mobile or Network applications. With this practice, we have won more than 500 satisfactory clients across the globe and no single client remains dissatisfied yet!"
                showButton = {false}
                ImageFirst = {true}
                buttonLabel="Check the Team"
                buttonLink="/About" 
                />
                </Slide>
                {/* <Slide direction="right">
                    <Section
                        className="text-one"
                        image={logos}
                        content={
                            <>
                                <ul class="side-by-side-list">
                                    <li ><h2>100+</h2>Active Clients</li>
                                    <li ><h2>200+</h2>Projects Done</li>
                                    <li ><h2>55+</h2>Dedicated Teams</li>
                                </ul>
                          </>
                        }
                    />
                </Slide> */}

                {/* <Bounce> */}
                
                {/* // className="section-light"
                // image={info}
                // title="Why Us?"
                // content="According to Forbes Having a website is an opportunity to make a great first impression and give people comfort that you're a real business. With the invention of the Internet, life started a whole new journey with generation of computers getting better. It has grown to be the most preferrable way of communication.
                //         With roughly over 60% of the global population using the internet, Websites play an important role as over 70% of small business today own a Website. A website does not only give an easy finding and up to date info about a brand/company but also increases your business' credibility."
                // ImageFirst={true} */}
                <Slide>
                <WhyUs />
                </Slide>
                {/* </Bounce> */}

                {/* <Slide direction="right">
                <Question />
                </Slide> */}

                {/* <Fade>
                <Section 
                className="section-light"
                image={rocket}
                title="Timely delivery!"
                content="Asides focusing on building efficient, user-friendly apps we are pretty mindful of time. Get your projects at the stipulated time!"
                showButton={true}
                buttonLabel="See reviews"
                />
                </Fade>

                <Fade>
                <Section
                className="section-light" 
                image = {fastMessaging}
                title = "24/7 Customer Support"
                content = "With our automated customer support system and fine-tuned customer care representatives, we are here to always serve you on time."
                showButton = {true}
                ImageFirst = {true}
                buttonLabel="Contact us"
                />
                </Fade> */}
            {/* Cards - Our Services*/}
                <CardSection />
                <DigitalMarketing/>
                <Bounce>
                <Section 
                    className="section-light"
                    image={design}
                    title="We design just what's best for you!"
                    content="E-commerce Application? Professional Corporate Site? Security and Optimization?
                            You make the choice, we bring it to life at its best!"    
                />
                </Bounce>
                {/* CONTACT FORM */}
                <Contact />
                
                <Fade >
                {/* Footer */}
                <Footer />
                </Fade>
            </div>
        </>
    )
}


export default Home;