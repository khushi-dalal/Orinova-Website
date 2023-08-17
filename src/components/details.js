import React from "react"


export default function Section(props){
    const ImageFirst = props.ImageFirst;
    if(ImageFirst){
        return (
            <div className="section-light">
                <div>
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    {props.showButton && <button>Check the Team</button>}
                </div>
            </div>
        )
        }
    else{
        return (
            <div className={props.className}>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    {props.showButton && <button>{props.buttonLabel}</button>}
                </div>
                <div>
                    <img src={props.image} alt={props.alt}/>
                </div>
            </div>
        )
    }
}