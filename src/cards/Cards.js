import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="cardsContainer" key={props.Id}>
      <h3>{props.title}</h3>
      <img src={props.Img} alt='newspaper' className="newspaperImg" />
      <p>{props.description}</p>
      <Link to={props.link}>click here for more information</Link>
     
    </div>
  );
}

const Article = (props) => {
  return (
    <div className="mainpageArticleContainer" key={props.id}>
              <div className="articlesContainer">
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  {/*  */}
                  {props.MainpageTitle}
                </h2>
                <p
                  style={{
                    color: "white",
                  }}
                >
                  {props.mainpageDescription}
                </p>
              </div>
              <div className="articleImg">
                <img
                  // src=
                  src={props.ImgLink}
                  alt="hello"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </div>
  );
}
export {Article}
export default Cards;
