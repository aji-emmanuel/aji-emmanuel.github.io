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
    <section id="skills" className="features section-padding"  data-aos="fade-up">
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
                        <h3>Rest API</h3>
                        <p>Solid experience with C#, .NET, .NET Core and JavaScript in building Restful APIs that are reliable, maintainable, and scalable.</p>
                    </div>
                     <div className="feature-item">
                        <div className="icon">
                            <i className="fa-solid fa-tv"></i>
                        </div>
                        <h3>Frontend Development</h3>
                        <p>Proficiency in ReactJs, HTML, CSS, Bootstrap and JQuery in developing dynamic, intuitive and responsive user interfaces.</p>
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
                            <i className="fa-brands fa-git-square"></i>
                        </div>
                        <h3>Source Control</h3>
                        <p>Proficient in tracking and managing changes to source code using git and remote repositories such as GitHub, BitBucket and GitLab.
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
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-brands fa-aws"></i>
                        </div>
                        <h3>AWS</h3>
                        <p>Strong understanding of AWS Cloud Technology.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-solid fa-bug"></i>
                        </div>
                        <h3>Unit Testing</h3>
                        <p>In-depth experience in <br /> using testing frameworks such as NUnit and XUnit
                                <br /> in identify bugs early in the development process.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-solid fa-database"></i>
                        </div>
                        <h3>SQL/NoSQL</h3>
                        <p>Solid experience <br /> in using relational databases such as SQLServer, MySQL, PostgreSQL,
                            <br /> and non-relational databases such as MongoDb.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <i className="fa-regular fa-file"></i>
                        </div>
                        <h3>API Documentation</h3>
                        <p>Proficiency in using <br /> API testing tools such as Postman and swagger in 
                            <br /> testing, sharing, and documenting APIs.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
        <hr id="projectScroll"/>
    </section>
  );
};

export default Skills;