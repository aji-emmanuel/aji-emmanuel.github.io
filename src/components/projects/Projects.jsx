import React from 'react';
import './project-style.css';
const pickNpay = require('../../assets/img/pickNpay.png');
const hotelier = require('../../assets/img/hotelier.png');
const onboarding = require('../../assets/img/onboarding-app.png');
const gitFinder = require('../../assets/img/gitFinder.png');

const Projects = () => {
  return (
    <section id="slider-container"  id="projects" data-scroll-index="3">

        <div className="section-title">
            <h2>Selected <span>Projects</span></h2>
        </div>
        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src={hotelier} alt="poster" />
            </div>

            <div className="slider-details">
                <strong>Hotelier</strong>
                <p>This was built using ASP.NET MVC with a team of engineers. It’s a platform where managers of different hotels can register their hotels and track their overall operations. It has a sister project; a Hotel Booking Mobile App which is used by customers to browse through all the hotels registered on the platform and make choices on which hotel to book.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                    <a href="#"><i className="fab fa-bootstrap"></i></a>
                </div>

                <div className="card-btns">
                    <a href="https://www.hotelier.ng" className="play-btn" target="_blank" rel="noreferrer">
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>
            </div>
        </div>
        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src={pickNpay} alt="poster" />
            </div>
            <div className="slider-details">
                <strong>Pick n Pay</strong>
                <p>An e-commerce application built using Asp.Net MVC. It is a web app for shopping where users can create accounts, login and logout, browse through different products from different categories, add to cart and checkout.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                    <a href="#"><i className="fab fa-bootstrap"></i></a>
                </div>

                <div className="card-btns">
                    <a href="https://github.com/aji-emmanuel/Pick-N-Pay" className="trailer-btn" target="_blank" rel="noreferrer">
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a href="http://picknpaywebsite.herokuapp.com/" className="play-btn" target="_blank" rel="noreferrer">
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>
            </div>
        </div>

    

    
        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src={onboarding} alt="poster" />
            </div>
            <div className="slider-details">
                <strong>Onboarding App</strong>
                <p>This app is used to automate the onboarding process of new employees into an organization.
                    It utilizes the Slack API, to automate onboarding of new employees into Slack and adding them to specific channels.
                    It also uses Google Calendar API to invite new employees to onboarding meetings.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                    
                </div>

                <div className="card-btns">
                    <a  className="trailer-btn" >
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a  className="play-btn" >
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>

            </div>
        </div>



        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src={gitFinder} alt="poster" />
            </div>
            <div className="slider-details">
                <strong>Git User Finder</strong>
                <p>This was the very first app that I built while learning React, implementing Context and Reducer Hooks. It is used to search for GitHub users, using their usernames.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-figma"></i></a>
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
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


        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src="" alt="poster" />
            </div>
            <div className="slider-details">
                <strong>PlayPal</strong>
                <p>This is one of the first set of projects i did while learning how to code.Obviously, It's a Music streaming website. i built it with HTML, CSS and JavaScript. The background picture was designed by me in Adobe Photoshop.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                </div>

                <div className="card-btns">
                    <a href="#!" className="trailer-btn" target="_blank" rel="noreferrer">
                        <i className="fas fa-mobile"></i>
                        View Code
                    </a>
                    <a href="#!" className="play-btn" target="_blank" rel="noreferrer">
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Projects