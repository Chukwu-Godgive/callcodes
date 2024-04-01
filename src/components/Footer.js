import React from "react";
import "../components/css/home.css";

function Footer() {
  // gets the current year
  const year = new Date().getFullYear();

  return (
    <div className="year">
      <p>
        All right reserved &copy; {year} powered by{" "}
        <a href="https://3mtt.nitda.gov.ng/" target="_bank">3MTT</a>
      </p>
    </div>
  );
}

export default Footer;
