import React, { useState, useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import githubLogo from '../../assets/githubLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';
import resumeLogo from '../../assets/resumeLogo.png';


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
            <span className="contact-header">Contact</span>
            <div className="contact-section">
                <div className="contact-form">
                    <span className='contact-form-header'>Send me a message</span>
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
                            rows="8"
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="social-links">
                    <span className="social-header">More of Me</span>
                    <a href="https://github.com/Nisal4" className='socials' target="_blank" rel="noopener noreferrer">
                        <div className='link-pic-container'>
                            <img src={githubLogo} alt='github' className='link-pic'></img>
                        </div>
                        <div className='link-text-container'>
                            Github
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/nisal-attanayake" className='socials' target="_blank" rel="noopener noreferrer">
                        <div className='link-pic-container'>
                            <img src={linkedinLogo} alt='github' className='link-pic'></img>
                        </div>
                        <div className='link-text-container'>
                            LinkedIn
                        </div>
                    </a>
                    <a href="https://github.com" className='socials'>
                        <div className='link-pic-container'>
                            <img src={resumeLogo} alt='github' className='link-pic'></img>
                        </div>
                        <div className='link-text-container'>
                            Download My Resume
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
