import React from 'react';
import './ResultCard.css'
const Card = (props) => {
    const className = "card " + props.border + "Border";
    let date = new Date();
    return (
        <div className={className}>
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <h2><b>{props.count}</b></h2>
                <p>Count of {props.title} till {props.lastUpdate}</p>
            </div>
        </div>
    );
}

export default Card;