import React from 'react';
import './project-style.css';
var pickNpay = require('../../assets/img/pickNpay.png');

const Projects = () => {
  return (
    <section id="slider-container"  id="projects" data-scroll-index="3">

        <div className="section-title">
            <h2>Selected <span>Projects</span></h2>
        </div>
        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src="img/p1.png" alt="poster" />
            </div>

            <div className="slider-details">
                <strong>5.0 GPA Calculator</strong>
                <p>This is a GPA Calculator i built using HTML, CSS, JavaScript and Bootstrap. You can use this app to keeptrack and calculate your GPA.This calculator had been modified and tested to serve its purpose so it gives 100% Accurate results.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                    <a href="#"><i className="fab fa-bootstrap"></i></a>
                </div>

                <div className="card-btns">
                    <a href="https://github.com/AmeerBamigbayan/GPA-Calculator" className="trailer-btn" target="_blank">
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a href="gpacalculator/index.html" className="play-btn" target="_blank">
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
                    <a href="https://github.com/AmeerBamigbayan/E-Commerce-Website" className="trailer-btn" target="_blank">
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a href="https://ecommerce-website-by-ameer.netlify.app/" className="play-btn" target="_blank">
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>
            </div>
        </div>

    

    
        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src="img/p3.png" alt="poster" />
            </div>
            <div className="slider-details">
                <strong>Admin Dashboard</strong>
                <p>This is a website admin dashboard where website owners/administrators can get analytics and reports of sales, pageviews, traffic and visitors on their websites</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                    
                </div>

                <div className="card-btns">
                    <a href="https://github.com/AmeerBamigbayan/AdminDashboard" className="trailer-btn" target="_blank">
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a href="https://admin-dashboard-by-ameer.netlify.app/" className="play-btn" target="_blank">
                        <i className="fas fa-globe"></i>
                        View Site
                    </a>
                </div>

            </div>
        </div>



        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src="img/p4.png" alt="poster" />
            </div>
            <div className="slider-details">
                <strong>Not Facebook</strong>
                <p>This is more of a Facebook Clone i designed in Figma and later decided to develop. It has a sticky menu and dark mode feature.</p>

                <div className="movie-cast">
                    <a href="#"><i className="fab fa-figma"></i></a>
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <a href="#"><i className="fab fa-css3-alt"></i></a>
                    <a href="#"><i className="fab fa-js"></i></a>
                </div>

                <div className="card-btns">
                    <a href="https://github.com/AmeerBamigbayan/NotFacebook" className="trailer-btn" target="_blank">
                        <i className="fas fa-code"></i>
                        View Code
                    </a>
                    <a href="https://not-facebook-by-ameer.netlify.app/" className="play-btn" target="_blank">
                        <i className="fas fa-globe" target="_blank"></i>
                        View Site
                    </a>
                </div>
            </div>
            
        </div>


        <div className="slider-box aos-init aos-animate" data-aos="fade-down">
            <div className="slider-img">
                <img src="img/p5.png" alt="poster" />
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
                    <a href="https://dribbble.com/AmeerBamigbayan" className="trailer-btn" target="_blank">
                        <i className="fas fa-mobile"></i>
                        See Design
                    </a>
                    <a href="https://playpal-by-ameer.netlify.app/" className="play-btn" target="_blank">
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