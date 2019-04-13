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
import GeneralInfo from '../components/generalInfo';
import ProStaff from '../components/proStaff.js';
import Testimonials from '../components/testimonials';
import LegalStuff from '../components/legalStuff';
import ClosingStatement from '../components/closingStatement';

class About extends Component {
    render() {
        return(
                <div id="page-wrapper" ref="main">
                    <Header/>
                    <ButtonMenu />
                    <Properties/>
                    <Memberships/>
                    <Contact />
                    <Faqs/>
                    <GeneralInfo/>
                    <ProStaff />
                    <Testimonials/>
                    <LegalStuff/>
                    <ClosingStatement/> 
                    <Footer />
                </div>
        );
    }
}

export default About;
