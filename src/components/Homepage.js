import React from "react";
import "./Homepage.css";
import Cards from "../cards/Cards";
import axios from 'axios'

const Homepage = () => {
  axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms')
  .then((res) => {
    console.log(res)
  })
  return (
    <div className="homepageContainer">
      <div className="cardsContainerDiv">
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />
        <Cards
          title="rtttttttt"
          Date="24-02-2003"
          link="https://timesofindia.indiatimes.com/india/intel-bid-to-radicalise-inmates-of-de-addiction-centres-run-by-waris-punjab-de/articleshow/98910537.cms"
        />

      </div>
    </div>
  );
};

export default Homepage;
