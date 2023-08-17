import React from "react";
import Card from "./card";
import marketing from "../Assets/images/marketing-logo.png" 
import seo from "../Assets/images/seo.png"
import engine from "../Assets/images/engine-marketing.png"
import webdesign from "../Assets/images/webdesign.png"
import graphicdesign from "../Assets/images/graphicdesign.png"
import ppc from "../Assets/images/ppc.png"
import aff from "../Assets/images/aff-m.png"
import { Slide } from "react-awesome-reveal";

export default function DigitalMarketing(){
    return(
        <div id="services3">
            <h2 id="marketing-head">Digital Marketing</h2><br></br>
            <p id="marketing-head">Our SEO team works in an innovative approach and follows Google-friendly algorithms to get a safe ranking with White Hat strategy! Uplift ranking in Google SERP with the best strategy!</p><br></br>
            <div class="card-container3">
                <Slide direction="left">
                    <Card 
                    image={seo}
                    title="Search Engine Optimization"
                    content="Our in-house digital marketing team will drive your website towards monetization with online visibility across the globe or targeted area on Google Search engine! Yielding revenue is fulfilled. "
                    />
                </Slide>
                <Slide direction="right">
                    <Card 
                    image={marketing}
                    title="Social Media Marketing"
                    content="The best SMM team establishes your business on FaceBook, Instagram, Twitter, Whats App, and other sites effectively. WhatsApp Marketing is much popular presently because of user-friendliness!"
                    />
                </Slide>

                <Slide direction="left">
                    <Card 
                    image={engine}
                    title="Search Engine Marketing"
                    content="SEM experts commit to generate a higher ROI from lower investment per single sale or client acquisition! Save money and Grow well at a faster rate within a dedicated
                    timeline with our support!"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={ppc}
                    title="Pay-Per-Click Advertising"
                    content="PPC experts help get the faster deals from potential visitors through Google Adwords within a short period! It’s the high-level paid or premium campaign conducted by certified professionals."
                /></Slide>
                <Slide direction="right">
                    <Card 
                    image={webdesign}
                    title="Content Marketing"
                    content="Content is a dependable component in the digital platforms including web pages, Articles, Blogs, and PR, etc. Unique and high-quality content is often recommended for a Landing page!"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={aff}
                    title="Affiliate Marketing"
                    content="
                    Get paid the commission on the sales volume with tricky affiliate marketing and the Amazon sellers and other online eCommerce sellers can take this opportunity to increase the sales volume!"
                    />
                </Slide>
            </div>
        </div>

    )
}