import React from "react";
import "./Card1.css";

import ipl from "./ipl.jpeg";
import stk from "./stkmrkt.jpg";
import perm from "./permlist.jpg";

function Card1(){
    return(
        <div className="container">
            <div className="card">
                <div className="card-image proj1" style={{backgroundImage: "url("+stk+")"}}></div>
                <h2><i>STOCK MARKET TRACKER</i></h2>
                <p>The Stock Market Tracker was developed using Python for functionality and some basic HTML and CSS for personalized styling. The project utilizes the Yahoo! Finance API to obtain all numbers and graphs regarding the Indian Stock Exchange</p>
            </div>

            <div className="card">
                <div className="card-image proj2" style={{backgroundImage: "url("+perm+")"}}></div>
                <h2><i>NOTES APP</i></h2>
                <p>The Notes App was developed using JavaScript for functionality and fully styled using EJS and CSS. The app is hosted on a local database using PostgreSQL and the user data is persisted on the local device</p>
            </div>

            <div className="card">
                <div className="card-image proj3" style={{backgroundImage: "url("+ipl+")"}}></div>
                <h2><i>IPL AUCTION SIM</i></h2>
                <button className="progress-tag">👷🏻‍♂️ Work In Progress</button>
                <p>The IPL Auction Simulator is an ambitious project that aims to simulate the "auctioning" process of the famous Indian cricket league</p>
            </div>
        </div>
    )
}

export default Card1;