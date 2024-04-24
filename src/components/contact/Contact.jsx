import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div>
            <div className="contact-container">
            <div className="contact-card">
                <form>
                    <input type="text" placeholder="Name" name="name" size={35} required />
                    <p/>
                    <input type="email" placeholder="Email" name="email" size={35} required />
                    <p/>
                    <textarea name="message" placeholder="Type away!" rows={10} cols={28} require />
                    <p />
                    <button type="submit" style={{backgroundColor: "#ffcd9b"}}>Go!</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;