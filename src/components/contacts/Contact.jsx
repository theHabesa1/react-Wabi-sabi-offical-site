import "./contact.scss"
import { useState } from "react";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
   
    <div className='contact' id="contact">
    <div className="left">
      <img src="assets/handshake-friends-svgrepo-com.svg" />
    </div>
    <div className="right">
     
      <form onSubmit={handleSubmit} className="form">
      <h2>CONTACT US</h2>
    <p type="Name:"><input placeholder="Write your name here.."></input></p>
    <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
    <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
    <button type="submit"> Send Message</button>
    {message && <span>Thanks, I'll reply ASAP :)</span>}
  
      </form>
    </div>
    
    </div>
  )
}

