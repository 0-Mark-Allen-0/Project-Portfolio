import React from "react";
import "./Hero.css";


function Hero(){

  // document.querySelector("h1").onmouseover = event =>{
  //   event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random()*26)]).join("");
  // }

    return(
        <div class="hero-image">
        <div class="hero-text">
          <h1>I'm Mark Allen.</h1>
         <p></p>
          <button style={{backgroundColor: "#c09bff"}}>Learn More.</button>
        </div>
      </div> 
    )
}

export default Hero;