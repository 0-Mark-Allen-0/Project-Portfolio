import React from "react";
import "./About.css";
import myimg from "./my-img.jpeg"

//Skills Import
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import node from "./node.png";
import next from "./next.png";
import post from "./icons8-postgres-96.png";
import react from "./react.png";
import boots from "./icons8-bootstrap-96.png";

function About(){
    return(
        <div className="about-text">
            <div className="about-div">

            <img src={myimg} alt="my pic"/>

            <h1>Hey, I'm <span className="span">Mark!</span>👋🏻</h1>


            <h3>I'm a Full-Stack web developer who aspires to become a master of his craft!</h3>
            <h3>Being a person who was drawn in by the wonders of computer technology at a</h3>
            <h3>very young age, I felt the strong need to innovate and design computer applications. </h3>
            
            </div>

            <br />
            
            <div className="about-div">
            
            <h1>Educational <span className="span">Qualifications</span> 🎓</h1>
            <h3>✅ Higher secondary education from Arsha Vidya Mandir (92%)</h3>
            <h3>✅ UG degree in B.Tech Computer Science (Core) from VIT (8.8 CGPA)</h3>
            
            </div>
            
            <br />

            <div className="about-div">
            
            <h1>Programming <span className="span">Skills</span>💻</h1>
                <div className="skills-list">
                    <img className="skill" src={html}   alt="skill logos"/>
                    <img className="skill" src={css}    alt="skill logos"/>
                    <img className="skill" src={js}     alt="skill logos"/>
                    <img className="skill" src={node}   alt="skill logos"/>
                    <img className="skill" src={post}   alt="skill logos"/>
                    <img className="skill" src={react}  alt="skill logos"/>
                    <img className="skill" src={next}   alt="skill logos"/>
                    <img className="skill" src={boots}  alt="skill logos"/>
                </div>
            </div>
        </div>
    );
}

export default About;