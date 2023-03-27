import React from "react";
import "./Homepage.css";
import Cards from "../cards/Cards";
import res from "./Data.json"
const data = res.Data;

const Homepage = () => {


  return (
    <div className="homepageContainer">
      
      <div className="breakingNewsContainer">
        <h3 className="Headline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum officia quas dicta!</h3>
        <div className="breakingNewsImg"></div>
        </div> 

        {data && data.map((data) => { 
          return <Cards
          Id={data.Id}
          title={data.title} 
          Img={data.imgUrl}
          description={data.description}
          />
        })
       }
       
    </div>
  );
};


export default Homepage;
