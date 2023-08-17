import React from "react";
import Card from "./card";
import appdev from "../Assets/images/appdev.png" 
import repairs from "../Assets/images/task.png"
import webdev from "../Assets/images/webdev.png"
import webdesign from "../Assets/images/webdesign.png"
import graphicdesign from "../Assets/images/graphicdesign.png"
import illustration from "../Assets/images/illustration.png"
import { Slide } from "react-awesome-reveal";

export default function CardSection(){
    return(
        <div id="services">
            <h2 id="services-head">OUR SERVICES:</h2><br></br>
            <div class="card-container">
                <Slide direction="left">
                    <Card 
                    image={appdev}
                    title="App Development"
                    content="We develop smooth Native (Android/iOS) and Hybrid Mobile Apps. Our Mobile Applications are polished and Flawless to win the trust of clients. "
                    />
                </Slide>
                <Slide direction="right">
                    <Card 
                    image={webdev}
                    title="Web Development"
                    content="Our Dynamic, and Responsive Web development with advanced PHP, Java and .Net frameworks leave an impressive message to the global viewers."
                    />
                </Slide>

                <Slide direction="left">
                    <Card 
                    image={illustration}
                    title="E-commerce solution"
                    content="Obtain B2B and B2C E-commerce applications for progressing your online business across the globe. Obtain a user-friendly and SEO-friendly online shop now."
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={graphicdesign}
                    title="Graphic Design"
                    content="
                    Our UX/UI design makes a lasting impression on customers with just one click, delivering an eye-catching and brand-enhancing experience."
                    />
                </Slide>
                <Slide direction="right">
                    <Card 
                    image={webdesign}
                    title="Web Design"
                    content="Creativity is crucial for highlighting your brand's distinctiveness and conveying your corporate message through product features."
                    />
                </Slide>
            
            </div>
        </div>

    )
}