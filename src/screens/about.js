import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ButtonMenu from '../components/buttonMenu';
import Properties from '../components/properties';
import Memberships from '../components/memberships';
import Faqs from '../components/faqs';
import Contact from '../components/contact';

class About extends Component {
    render() {
        return(
                <div id="page-wrapper">
                    <Header/>
                    <ButtonMenu />
                    <Properties/>
                    <Memberships/>
                    <Footer />
                    <Contact />
                    <Faqs/>
                </div>
        );
    }
}

export default About;
