import React from "react";
import axios from "axios";
import "./Mainpage.css";
import { Article } from "../cards/Cards";
import { useState, useEffect } from "react";

export default function Mainpage() {
  const [TopStories, setTopStories] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms"
      )
      .then((res) => {
        const Data = res.data.items;
        setTopStories(Data);
        console.log(Data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(TopStories);

  return (
    <div className="mainpageContainer">
      {TopStories &&
        TopStories.map((story) => {
          return (
            <Article
            id= {story.id}
            MainpageTitle={story.title}
            mainpageDescription={story.description}
            ImgLink={story.enclosure.link}
            />
          );
        })}
    </div>
  );
}
