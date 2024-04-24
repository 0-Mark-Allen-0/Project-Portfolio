import React from "react";
import "./Header.css";

function Header(){
    return(
        <div class="header">
        <a href="#default" class="logo">MAV.</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="AboutPage/">About</a>
        </div>
      </div> 
    )
}

export default Header;