import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/loginForm';
import ClosingStatement from '../components/closingStatement';

class Login extends Component {
    render() {
        return(
            <Fragment>
                <Header/>
                <LoginForm/>
                <ClosingStatement/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Login;
