import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import Banner from '../components/banner';
import WhyShouldIBecomeAMember from '../components/whyShouldIBecomeAMember';
import SnowGeeseAndDucks from '../components/snowGeeseAndDucks';
import WhatMakesUsDifferent from '../components/whatMakesUsDifferent';
import ClosingStatement from '../components/closingStatement';
import Footer from '../components/footer';

class Home extends Component {
    componentDidMount() {
        setTimeout(this.removeClass, 100);
    }
    removeClass = () => {
        document.body.classList.remove('is-loading');
    }
    render() {
        return(
            <Fragment>
                <div id="page-wrapper">
                <Header/>
                <Banner/>
                <WhyShouldIBecomeAMember/>
                <SnowGeeseAndDucks/>
                <WhatMakesUsDifferent />
                <ClosingStatement />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
