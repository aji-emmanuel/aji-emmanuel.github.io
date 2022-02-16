import React, { useEffect } from 'react';
import './skills-style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Slider from "react-slick";

const Skills = () => {

    useEffect(()=>{
        AOS.init({
            duration : 1000
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

  return (
    <section className="features section-padding" id="skills" data-aos="fade-up">
        <div className="pb">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title">
                        <h2>My <span>Skills</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
               
                <Slider {...settings}>
                     <div className="feature-item">
                        <div className="icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Backend Development</h3>
                        <p>Proficiency in C#, .NET and JavaScript in building systems that are reliable, maintainable, and scalable.</p>
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
                        <p>A year plus experience in building creative, aesthetic, responsive and fast user interfaces using React.</p>
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
                        <p>Proficient <br />in continous integration and continous deployment of applications, 
                            <br />using Git, GitHub Actions and workflows.
                        </p>
                    </div>
                     <div className="feature-item">
                        <div className="icon">
                            <i className="fa-brands fa-docker"></i>
                        </div>
                        <h3>Docker</h3>
                        <p>Solid experience <br />in containerizing applications using docker
                            for rapid deployment,<br /> while ensuring scalability and flexibility.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
        <hr />
    </section>
  );
};

export default Skills;