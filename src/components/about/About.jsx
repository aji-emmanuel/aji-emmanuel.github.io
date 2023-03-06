import React, { useEffect } from 'react';
import './about-style.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
    
    useEffect(()=>{
        AOS.init({
            duration : 1000
        });
    }, []);

  return (
    <section id="about" data-scroll-index="2" data-aos="fade-up">
       
        <div className="about-header">
            <div className="section-title">
                <h2>About <span>Me</span></h2>
            </div>
        </div>

        <div className="about-body">
            <p className='about-text'>
                Hey! I'm <span>Emmanuel Ajibode</span>.
                A Fullstack developer from Nigeria🌍. <br/><br/>
                I'm ambitious and love taking on challenges.
                I’m an Endless seeker of Knowledge🧠 and my variety of skills is continuously expanding...
                <br/><br />
                When I'm not on my laptop,
                <br/>
                you'll find me playing indoor games such as 
                table tennis and chess, or hanging out with friends.
            </p>
            <p className='about-text'>
                <br/> 
                I'm totally dedicated to <span>building</span> and <span>creating</span> software applications
                <br />
                in the most <span>innovative</span> and <span>efficient</span> manner possible.
            </p>
        </div>
        <hr />
    </section>
  );
};

export default About;