import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const Contact = () => {
    return (
        <section class="wrapper">
            <div class="inner">
                <div id="contact" class="toTopContainer">
                <img src={require('../assets/up.png')} class="toTop"/>
                </div>
                <header>
                    <h2 class="tac"><u>Contact Us</u></h2>
                    <div class="spacer20"></div>
                </header>

                    <div class="row uniform tac">

                        <div class="12u">
                            <h3>Rick Gardner</h3>
                            <div>(360) 630-7904</div>
                            <div>rick@kwth.com</div>
                            <div class="spacer30"></div>
                        </div>

                        <div class="12u">
                            <div class="spacer50"></div>
                            <ul class="actions tac">
                                <li><a href="https://www.knowwheretohunt.com/about/contact.asp" class="button big">Contact Form</a></li>
                            </ul>
                            <div class="spacer30"></div>
                        </div>

                    </div>

            </div>
        </section>
)};

export default Contact;