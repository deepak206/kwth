import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const Contact = () => {
    return (
        <section className="wrapper">
            <div className="inner">
                <div id="contact" className="toTopContainer">
                <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
                </div>
                <header>
                    <h2 className="tac"><u>Contact Us</u></h2>
                    <div className="spacer20"></div>
                </header>

                    <div className="row uniform tac">

                        <div className="12u">
                            <h3>Rick Gardner</h3>
                            <div>(360) 630-7904</div>
                            <div>rick@kwth.com</div>
                            <div className="spacer30"></div>
                        </div>

                        <div className="12u">
                            <div className="spacer50"></div>
                            <ul className="actions tac">
                                <li><a href="URL/about/contact.asp" className="button big">Contact Form</a></li>
                            </ul>
                            <div className="spacer30"></div>
                        </div>

                    </div>

            </div>
        </section>
)};

export default Contact;