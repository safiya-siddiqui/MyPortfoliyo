import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {


    const form = useRef();

    const[done, setDone]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p5jhcjn', 'template_46zhqfl', form.current, 'GCTjHjIHk0DjutT6C')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
      <div className="contact-form">
        <div className="contact-left">
            <div className="contact-name">
            <span>Get in touch</span>
          <span>Contact me</span>
            </div>
        </div>
       <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name="user_name" className="user"  placeholder='Name'/>
            <input type="email"  name="user_email" className="user"  placeholder='Email'/>
            <textarea name="message" className="user" placeholder='Message' />
            <input type="submit"  value="Send" className="buttons" />
            <span>{done && "thanks for contacting me!"}</span>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Contact
