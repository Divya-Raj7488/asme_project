import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="cardsContainer" key={props.Id}>
      {/* 
      title
     pubDate
     link 
     guid 
     author 
     thumbnail 
     description 
     content 
     enclosure
     categories  */}
      <h3>{props.title}</h3>
      <img src={props.Img} alt='newspaper' className="newspaperImg" />
      <p>{props.description}</p>
      <a href={props.link}>click here for more information</a>
    </div>
  );
}

export default Cards;
