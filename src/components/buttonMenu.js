import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import history from '../history';

const getPhoto = () => {
    history.push('/photos');
}
const ButtonMenu = () => {
    return (
        <section id="banner2">
            <section id="buttons" className="wrapper palette01">
                <div className="inner">
                    <header>
                        <h2 className="tac"><u>About Us</u></h2>
                    </header>
                    <div id="menu-buttons">
                        <AnchorLink href="#property" className="button palette01 scrolly">Properties</AnchorLink><br/>
                        <AnchorLink href="#memberships" className="button palette02 scrolly">Memberships</AnchorLink><br/>
                        <AnchorLink href="#faqs" className="button palette03 scrolly">FAQs</AnchorLink><br/>
                        <AnchorLink href="#contact" className="button palette01 scrolly">Contact Us</AnchorLink><br/>
                        <AnchorLink href="#general" className="button palette02 scrolly">General Info</AnchorLink><br/>
                        <AnchorLink href="#prostaff" className="button palette03 scrolly">Pro Staff</AnchorLink><br/>
                        <AnchorLink href="#testimonials" className="button palette01 scrolly">Testimonials</AnchorLink><br/>
                        <AnchorLink href="#legal" className="button palette02 scrolly">Legal Stuff</AnchorLink><br/>
                        <a href="" onClick={() => getPhoto()} className="button palette03">Photos</a><br/>
                    </div>
                </div>
            </section>
        </section>
)};

export default ButtonMenu;