import React from "react";

export default function Section(props){
    return (
        <div id="section">
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <button>
                    {props.btnLabel}
                </button>
            </div>
        </div>
    )
}