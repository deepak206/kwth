import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ForgotPasswordForm from '../components/forgotPasswordForm';
import ClosingStatement from '../components/closingStatement';


class ForgotPassword extends Component {
    render() {
        return(
            <Fragment>
                <div id="page-wrapper">
                <Header/>
                <ForgotPasswordForm/>
                <ClosingStatement/>
                </div>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default ForgotPassword;
