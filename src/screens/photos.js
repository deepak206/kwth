import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ClosingStatement from '../components/closingStatement';
import Gallery from '../components/gallery';

class Photos extends Component {
    render() {
        return(
                <Fragment>
                    <Header/>
                    <Gallery/>
                    <ClosingStatement/> 
                    <Footer />
                </Fragment>
        );
    }
}

export default Photos;
