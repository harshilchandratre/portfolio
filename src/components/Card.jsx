import React from "react";
import "../styles/Card.css";

const Card = ({src, cardTitle, cardLong}) => {
  return <div className="Card-main">
    <img className="cardImg" src={src} alt="image" />
    <h2 className="cardTitle">{cardTitle}</h2>
    <p className="cardLong">{cardLong}</p>
  </div>;
};

export default Card;
