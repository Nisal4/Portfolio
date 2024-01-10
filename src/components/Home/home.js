import React, { useState } from "react"
import "./home.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import javascriptLogo from '../../assets/javascriptLogo.png'
import htmlLogo from '../../assets/htmlLogo.png'
import cssLogo from '../../assets/cssLogo.png'
import pythonLogo from '../../assets/pythonLogo.png'
import djangoLogo from '../../assets/djangoLogo.png'
import nodeLogo from '../../assets/nodeLogo.png'
import expressLogo from '../../assets/expressLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import mongoDBLogo from '../../assets/mongoDBLogo.png'
import postgresqlLogo from '../../assets/postgresqlLogo.png'
import awsLogo from '../../assets/awsLogo.png'
import gitLogo from '../../assets/gitLogo.png'
import vscodeLogo from '../../assets/vscodeLogo.png'
import sqlLogo from '../../assets/sqlLogo.png'
import rLogo from '../../assets/rLogo.png'


const carouselImg = [
    {
        image: javascriptLogo,
        title: "Javascript",
        index: 0
    },

    {
        image: htmlLogo,
        title: 'HTML5',
        index: 1,
    },

    {
        image: cssLogo,
        title: 'CSS3',
        index: 2,
    },

    {
        image: pythonLogo,
        title: 'Python',
        index: 3,
    },

    {
        image: djangoLogo,
        title: 'Django',
        index: 4,
    },

    {
        image: nodeLogo,
        title: 'Node.js',
        index: 5,
    },

    {
        image: expressLogo,
        title: 'Express',
        index: 6,
    },

    {
        image: reactLogo,
        title: 'React',
        index: 7,
    },

    {
        image: mongoDBLogo,
        title: 'MongoDB',
        index: 8,
    },

    {
        image: postgresqlLogo,
        title: 'PostgreSQL',
        index: 9,
    },

    {
        image: awsLogo,
        title: 'AWS',
        index: 10,
    },

    {
        image: gitLogo,
        title: 'Git',
        index: 11,
    },

    {
        image: vscodeLogo,
        title: 'VS Code',
        index: 12,
    },

    {
        image: sqlLogo,
        title: 'SQL',
        index: 13,
    },

    {
        image: rLogo,
        title: 'R',
        index: 14,
    },
]



const Home = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? carouselImg.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === carouselImg.length - 1 ? 0 : current + 1);
    };

    

    return (
        <section className="intro" id='/' >
            <div className="intro-text">
                <span className="description-1">SOFTWARE ENGINEER +</span>
                <br></br>
                <span className="description-2">FULL-STACK DEVELOPER</span>
                <br></br>
                <span className="name">NISAL ATTANAYAKE</span>
                <p className="statement">I'm a dynamic and passionate full-stack software engineer, who brings a fresh perspective to the technology industry. 
                My proficiency lies in my exceptional ability to debug complex code, research and integrate cutting-edge technologies, and tackle challenging projects with tenacity and a solution-driven approach. 
                I am committed to continuously learning and poised to make an impact by delivering innovative solutions.</p>
            </div>

            <div className="skills">
                <span className="skill-title">Skills</span>
                <div className="carousel">
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                    {carouselImg.map((slide, index) => {
                        return (
                            <div className={index === current ? 'active' : 'inactive'} key={index}>
                                {index === current && (<img src={slide.image} alt='skillImg' className="skillImg"></img>)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home