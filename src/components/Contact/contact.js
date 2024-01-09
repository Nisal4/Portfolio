import React, { useState, useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const form = useRef();  

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o3rnvdh', 'template_566sgxq', form.current, '333gs4IQMU0QO2QFp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setFormData({ name: '', email: '', message: '' });
      };

    return (
        <div className='contact'>
            <span className="contact-header">Contact Me</span>
            <div className="contact-section">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Leave a Message"
                            rows="4"
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="social-links">
                    <span className="social-header">More of Me</span>
                    <a href="https://github.com">GitHub</a>
                    <a href="https://linkedin.com">LinkedIn</a>
                    <a href="https://twitter.com">Download My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
