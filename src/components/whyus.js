import React from "react";
import Card from "./card";
import project from "../Assets/images/project.png" 
import time from "../Assets/images/time.png" 
import trust from "../Assets/images/trust-icon.png" 
import team from "../Assets/images/team-28.png" 
import calendar from "../Assets/images/calendar.png" 
import { Slide } from "react-awesome-reveal";

export default function CardSection(){
    return(
        <div id="services2">
            <h2 id="test">Why you Choose US</h2><br></br>
            <h3 id="test">We leverage Web and Mobile App opportunities to create a solid end-user experience, enhancing your brand’s augmentation.</h3>
            <br></br>
            <div class="card-container2">
                <Slide direction="left">
                    <Card 
                    image={calendar}
                    title="5+ Years"
                    content="Experience"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={team}
                    title="55+"
                    content="Dedicated Team"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={project}
                    title="2000+"
                    content="Projects Done"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={trust}
                    title="2500+"
                    content="Trusted Clients"
                    />
                </Slide>
                <Slide direction="left">
                    <Card 
                    image={time}
                    title="99.99%"
                    content="Timely Work"
                    />
                </Slide>
            </div>
        </div>

    )
}