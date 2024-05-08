import React from 'react'
import contact from "../../assets/contact.svg";
import "./Contact.css" ;
function Contact () {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f29973a1-0196-4ec2-bc9e-15d411dd540b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <div id="contact">
        <h1>Contact and Details</h1>
        <div className='cmain'>
            <div className="cleft">
            <form onSubmit={onSubmit} className='cform' id="cform">
        <label htmlFor="name">Enter Your Name</label>
            <input type="name" id="name" />
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea rows={6}  type="message" id="message" />
            <button className="hover:bg-light m-2 bg-gradient-to-r from-dark to-light p-2 rounded"type="submit">Send</button>
        </form>
            </div>
            <div className="cright">
                <img src={contact} alt="image not founds" />
            </div>
        </div>
    </div>
  )
}

export default Contact
