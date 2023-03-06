import React, { useEffect } from 'react';
import './contact-style.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(()=>{
        AOS.init({
            duration : 1000
        });
    }, []);

    return (
        <section className="contact" id="contact" data-aos="fade-up">
            <div className="section-title">
                <h2>Contact <span>Me</span></h2>
            </div>
            <div className="content">
                <div className="row2">

                    <div className="card">
                        <div className="contact-icon">
                            <a href="#!" onClick={()=>window.location="mailto:emma.ajibode@gmail.com"} >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                        <div className="info">
                            <h3><a href="#!" onClick={()=>window.location="mailto:emma.ajibode@gmail.com"}>Email</a></h3>
                            <span>emma.ajibode@ gmail.com</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="tel:+2348062316992"  target="_blank" rel="noreferrer">
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
                        <div className="info">
                            <h3> <a href="tel:+2348062316992" target="_blank" rel="noreferrer">Phone</a></h3>
                            <span>+2348062316992</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="https://www.linkedin.com/in/emmanuel-ajibode-8168a998/"  target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="info">
                            <h3><a href="https://www.linkedin.com/in/emmanuel-ajibode-8168a998/"  target="_blank" rel="noreferrer">LinkedIn</a></h3>
                            <span>Emmanuel Ajibode</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="https://github.com/aji-emmanuel"  target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a> 
                        </div>
                        <div className="info">
                            <h3><a href="https://github.com/aji-emmanuel"  target="_blank" rel="noreferrer">Github</a></h3>
                            <span>Emmanuel Ajibode</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="https://twitter.com/Aji_Emilo"  target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a> 
                        </div>
                        <div className="info">
                            <h3><a href="https://twitter.com/Aji_Emilo"  target="_blank" rel="noreferrer">Twitter</a></h3>
                            <span>@Aji_Emilo</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="https://wa.me/2348062316992"  target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a> 
                        </div>
                        <div className="info">
                            <h3> <a href="https://wa.me/2348062316992"  target="_blank" rel="noreferrer">Whatsapp</a></h3>
                            <span>+2348062316992</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="contact-icon">
                            <a href="https://t.me/AjiEmmanuel" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a> 
                        </div>
                        <div className="info">
                            <h3><a href="https://t.me/AjiEmmanuel" target="_blank" rel="noreferrer">Telegram</a></h3>
                            <span>@Aji_Emilo</span>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
        </section>
    );
};

export default Contact;