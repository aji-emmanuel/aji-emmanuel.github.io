import React from 'react';
import './skills-style.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const Skills = () => {

    const carouselOptions = {
        loop: true,
        rewind: true,
        dotsEach: true,
        autoplay: true,
        animateOut: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        responsive:{
                    0:{ items:1, margin: 2},
                    450:{ items:2, margin: 4 },
                    1000:{ items:3, margin: 8}
                }
    };

  return (
    <section className="features section-padding" id="skills">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title">
                        <h2>My <span>Skills</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <OwlCarousel className="owl-carousel features-carousel" {...carouselOptions} >
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Backend Development</h3>
                        <p>Proficiency in C#, .NET and JavaScript in building systems that are reliable and scale well..</p>
                    </div>
                     <div className="feature-item">
                        <div className="icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Frontend Development</h3>
                        <p>Proficiency in HTML, CSS, Bootstrap and JavaScript for rapid prototyping and ability to execute all visual design stages from concept to final hand-off.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <h3>ReactJS</h3>
                        <p>Combining UI & UX experience, design skills, curiosity and the ability to always step into the client’s shoes for the satisfaction of my clients.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fas fa-pen-nib"></i>
                        </div>
                        <h3>Graphic Design</h3>
                        <p>Demonstrable graphic design skills with a strong portfolio and Proficiency in Figma, Photoshop, XD & other visual design/wire-framing tools. 
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-brands fa-git-square"></i>
                        </div>
                        <h3>CI/CD</h3>
                        <p>Solid experience <br />in creating WordPress websites that
                            are easy to 
                            understand, <br />use and navigate. Also very responsive. 
                        </p>
                    </div>
                     <div className="feature-item">
                        <div className="icon">
                            <i className="fa-brands fa-docker"></i>
                        </div>
                        <h3>Docker</h3>
                        <p>Solid experience <br />in creating WordPress websites that
                            are easy to 
                            understand, <br />use and navigate. Also very responsive. 
                        </p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </section>
  );
};

export default Skills;