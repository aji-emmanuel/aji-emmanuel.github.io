import React, { useEffect } from 'react';
import './project-style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
const pickNpay = require('../../assets/img/pickNpay.png');
const hotelier = require('../../assets/img/hotelier.png');
const onboarding = require('../../assets/img/onboarding-app.png');
const gitFinder = require('../../assets/img/gitFinder.png');
const bookly = require('../../assets/img/bookly.png');

const Projects = () => {

    useEffect(()=>{
        AOS.init({
            duration : 1000
        });
    }, []);

    return (
        <section id="projects" className="slider-container"  data-aos="fade-up">

            <div className="section-title">
                <h2>Selected <span>Projects</span></h2>
            </div>

            <div className="slider-box aos-init aos-animate" data-aos="fade-up">
                <div className="slider-img">
                    <img src={hotelier} alt="poster" />
                </div>
                <div className="slider-details">
                    <strong>Hotelier</strong>
                    <p>This was built using ASP.NET Web API for the backend application and ASP.NET MVC for the client facing application. It’s a platform where managers of different hotels can register their hotels and track their overall operations. Registered customers can also browse through all the hotels registered on the platform and make choices on which hotel to book.</p>
                    <p><b>Technologies Used: </b>C#, ASP.NET, Entity Framework Core, SQLServer, Serilog, XUNit, JWT, Swagger, JQuery, Bootstrap, Paystack</p>
                    <div className="techs">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                    </div>

                    <div className="card-btns">
                        <a href="https://apthotelsng.onrender.com" className="play-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-globe"></i>
                            View Site
                        </a>
                    </div>
                </div>
            </div>

            <div className="slider-box aos-init aos-animate" data-aos="fade-right">
                <div className="slider-img">
                    <img src={pickNpay} alt="poster" />
                </div>
                <div className="slider-details">
                    <strong>Pick n Pay</strong>
                    <p>An e-commerce application built using Asp.Net MVC. 
                        It is a web app for shopping where users can create accounts, login and logout, 
                        browse through different products from different categories, add to cart and checkout.</p>
                    <p><b>Technologies Used: </b>C#, ASP.NET, Blazor, Entity Framework Core, Webhook, SQLite, JQuery, Bootstrap, Flutter Wave</p>
                    <div className="techs">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                    </div>

                    <div className="card-btns">
                        <a href="https://github.com/aji-emmanuel/Pick-N-Pay" className="trailer-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i>
                            View Code
                        </a>
                        <a href="https://picknpay.onrender.com" className="play-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-globe"></i>
                            View Site
                        </a>
                    </div>
                </div>
            </div>
        
            <div className="slider-box aos-init aos-animate" data-aos="fade-left">
                <div className="slider-img">
                    <img src={onboarding} alt="poster" />
                </div>
                <div className="slider-details">
                    <strong>Onboarding App</strong>
                    <p>This is a frontend app used to automate the onboarding process of new employees into an organization.
                        It utilizes the Slack API, to automate onboarding of new employees into Slack and adding them to specific channels.
                        It also uses Google Calendar API to invite new employees to onboarding meetings.</p>
                    <p><b>Technologies Used: </b>ReactJs, Redux Toolkit, Axios, Bootstrap, C#, ASP.NET, Entity Framework Core, SQLServer, Swagger</p>
                    <div className="techs">
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                    </div>

                    <div className="card-btns">
                        <a className="trailer-btn" >
                            <i className="fas fa-code"></i>
                            View Code
                        </a>
                        <a  className="play-btn" href='https://apthr.netlify.app/' target='_blank' rel="noreferrer">
                            <i className="fas fa-globe"></i>
                            View Site
                        </a>
                    </div>

                </div>
            </div>

            <div className="slider-box aos-init aos-animate" data-aos="fade-right">
                <div className="slider-img">
                    <img src={bookly} alt="poster" />
                </div>
                <div className="slider-details">
                    <strong>Bookly</strong>
                    <p>Bookly is an online book library built using ASP.NET framework. 
                        The RESTful APi was built with ASP.NET Web Api and the User Facing App was built using ASP.NET MVC.
                        <br></br>
                        On Bookly, customers can read, review and rate a book after successful registration on the platform.</p>
                    <p><b>Technologies Used: </b>C#, ASP.NET, Entity Framework Core, SQLServer, JWT, JQuery, Bootstrap</p>
                    <div className="techs">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                    </div>

                    <div className="card-btns">
                        <a className="trailer-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-mobile"></i>
                            View Code
                        </a>
                        <a className="play-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-globe"></i>
                            View Site
                        </a>
                    </div>
                </div>
            </div>

            <div className="slider-box aos-init aos-animate" data-aos="fade-up">
                <div className="slider-img">
                    <img src={gitFinder} alt="poster" />
                </div>
                <div className="slider-details">
                    <strong>Git User Finder</strong>
                    <p>This was the very first app that I built while learning React, implementing Context and Reducer Hooks. It is used to search for GitHub users, using their usernames.</p>
                    <p><b>Technologies Used: </b>ReactJs, Axios, Context API, Bootstrap</p>
                    <div className="techs">
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                    </div>

                    <div className="card-btns">
                        <a href="https://github.com/aji-emmanuel/My-GitHubFinder" className="trailer-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i>
                            View Code
                        </a>
                        <a href="https://mygituserfinder.netlify.app/" className="play-btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-globe" target="_blank"></i>
                            View Site
                        </a>
                    </div>
                </div>
            </div>

            <hr id="aboutScroll"/>

        </section>
    );
};

export default Projects;