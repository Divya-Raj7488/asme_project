import React from "react";
import axios from "axios";
import "./Mainpage.css";
import { useState } from "react";

export default function Mainpage() {
  const [TopStories, setTopStories] = useState([]);

  axios
    .get(
      " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms"
    )
    .then((res) => {
      const StoriesData = res.data;
      const StoriesItems = StoriesData.items;
      setTopStories(StoriesItems);
    });
    console.log(typeof(TopStories))
  return (
    <div className="mainpageContainer">
      <div className="mainpageArticleContainer">
        <div className="articlesContainer">
          <h2
            style={{
              color: "white",
            }}
          >
            {TopStories.title}
          </h2>
          <p
            style={{
              color: "white",
            }}
          >
            description
          </p>
        </div>
        <div className="articleImg"></div>
      </div>
    </div>
  );
}
