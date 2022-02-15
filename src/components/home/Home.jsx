import React, { useEffect, useRef } from 'react';
import './home-style.css';
import Typed from "typed.js";

var mainImage = require('../../assets/img/aji-emmanuel-main.jpg');

const Home = () => {

    const textRef = useRef();

    useEffect(()=>{
        new Typed(textRef.current, {
            strings: ["My name is Emmanuel Ajibode.", "I'm a fullstack developer!"],
            typeSpeed: 100,
            backSpeed: 70,
            loop: true
        });
    });

  return (
    <section className="home d-flex align-items-center" id="home" data-scroll-index="0">
        <div className="effect-wrap">
            <i className="fas fa-code effect effect-1"></i>
            <i className="fas fa-code effect effect-2"></i>
            <i className="fa-solid fa-laptop-code effect effect-3"></i>
        </div>
        <div className="container">
            <div className="row align-items-center">

                <div className="col-md-5  text-center">
                    <div className="home-img">
                        <div className="circle"></div>
                        <img src={mainImage} alt="emmanuel ajibode" />
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="home-text">
                        <h4><span className="text" ref={textRef}></span></h4>
                        <p>
                            I'm a Fullstack Developer from Nigeria proficient mainly in C#, .NET and ReactJS.
                            I'm a curious learner and a creative team player, always seeking 
                            for opportunities where I can utilise my understanding of programming 
                            and software development to efficiently deliver sustainable economic 
                            growth that is profitable, environmentally responsible and socially 
                            relevant while having the scope to develop my own skills.
                        </p>
                        <p> Do you have one of such opportunities? <a href="#contact" style={{color:"black", fontWeight:"bolder", textDecoration:"none"}}>Contact me!</a></p>
                        <div className="home-btn pull-right">
                            <a download className="btn btn-1" href="Emmanuel_Ajibode_Resume.pdf"   target="_blank">Download Resume</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Home;