import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      {/* The header / Navbar Section */}
      <div className="home__header">
        <div className="header__left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon style={{ marginRight: "20px" }} />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google"
        />
        <div className="home__search">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
