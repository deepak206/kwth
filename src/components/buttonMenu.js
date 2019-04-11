import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const ButtonMenu = () => {
    return (
        <section id="banner2">
            <section id="buttons" className="wrapper palette01">
                <div className="inner">
                    <header>
                        <h2 className="tac"><u>About Us</u></h2>
                    </header>
                    <div id="menu-buttons">
                        <a href="#property" className="button palette01 scrolly">Properties</a><br/>
                        <a href="#memberships" className="button palette02 scrolly">Memberships</a><br/>
                        <a href="#faqs" className="button palette03 scrolly">FAQs</a><br/>
                        <a href="#contact" className="button palette01 scrolly">Contact Us</a><br/>
                        <a href="#general" className="button palette02 scrolly">General Info</a><br/>
                        <a href="#prostaff" className="button palette03 scrolly">Pro Staff</a><br/>
                        <a href="#testimonials" className="button palette01 scrolly">Testimonials</a><br/>
                        <a href="#legal" className="button palette02 scrolly">Legal Stuff</a><br/>
                        <a href="https://www.knowwheretohunt.com/about/photos.asp" className="button palette03">Photos</a><br/>
                    </div>
                </div>
            </section>
        </section>
)};

export default ButtonMenu;