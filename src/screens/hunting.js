import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HuntingSection from '../components/huntingSection';
import ClosingStatementAbout from '../components/closingStatementAbout';

class Hunting extends Component {
    render() {
        return(
            <Fragment>
                <Header/>
                <HuntingSection/>
                <ClosingStatementAbout/> 
                <Footer />
            </Fragment>
        );
    }
}

export default Hunting;
