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
                <Header/>
                <ForgotPasswordForm/>
                <ClosingStatement/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ForgotPassword;
