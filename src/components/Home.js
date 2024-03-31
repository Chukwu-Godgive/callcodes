import React, { useState } from "react";
import Footer from "../components/Footer";
import "../components/css/home.css";
import Video from "../components/assets/World.mp4";
import CompleteCountry from "../callCodes.json";
import _ from "lodash";
import Nav from "./Nav";

function Home() {
  const [search, setSearch] = useState([]);

  // url link for country icons
  const url = "https://country-code-au6g.vercel.app/";

  // handles user input
  const handleSearch = (e) => {
    let check = CompleteCountry.filter(
      (item) =>
        item.name === _.startCase(_.capitalize(e.target.value)) ||
        item.dial_code === e.target.value
    );

    setSearch(check);
  };

  return (
    <div className="background">
      <Nav />
      <div>
        <video
          className="video"
          src={Video}
          type="video/mp4"
          controlsList="nodownload"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="container">
        <div className="main">
          <div className="search">
            <input
              type="search"
              name="search"
              value={search.search}
              placeholder="Search"
              autoComplete="off"
              onChange={handleSearch}
            />
          </div>
          {search
            ? search.map((item, idx) =>
                item ? (
                  <div className="display-search" key={idx}>
                    <img src={url + item.image} alt={item.code} />
                    <p>{item.name}</p>
                    <p>{item.dial_code}</p>
                  </div>
                ) : null
              )
            : null}
          <div className="guide">
            <ul>
              <div className="steps">
                <li>
                  <h2>Step1</h2>
                </li>
                <p>
                  Locate the search bar or input field. This is typically
                  located at the top.
                </p>
              </div>
              <div className="steps">
                <li>
                  <h2>Step2</h2>
                </li>
                <p>Enter the country name or the code starting with plus(+)</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
