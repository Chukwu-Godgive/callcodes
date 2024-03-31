import React from "react";
import "../components/css/home.css";

function Footer() {
  // gets the current year
  const year = new Date().getFullYear();

  return (
    <div className="year">
      <p>
        All right &copy; {year} powered by <a href="v">3MTT</a>
      </p>
    </div>
  );
}

export default Footer;
