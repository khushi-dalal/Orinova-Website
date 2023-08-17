import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div>
                <img src={props.image} alt={props.alt}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>


    )
}