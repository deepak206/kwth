import React, {Fragment} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';

const getRoute = (route) => {
    history.push(route);
}

const LoginForm = () => {
    return (
        <Fragment>
        <section id="banner2"></section>
        <section className="wrapper">
        <div className="inner">
            <header>
                <h2 className="tac"><u>Login</u></h2>

            </header>

            <form id="formLogin" name="formLogin" method="post" action="/login/index-validate.asp">
                <div className="row uniform">

                    <div className="4u"></div>
                    <div className="4u 12u$(xsmall)">
                        <h4>Email Address</h4>
                        <input type="text" name="email" id="email" value="" placeholder="Email Address" /><br/>

                        <h4>Password</h4>
                        <input type="password" name="password" id="password" value="" placeholder="Password" />
                        <a href="" onClick={() => getRoute('/forgot-password')} className="tiny fr">Forgot Password</a>
                        <br/>


                        <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn"/>
                        <label for="keepLoggedIn">Keep Me Logged In</label>
                        <div className="spacerFloat20"></div>

                        <ul className="actions tar">
                            <li>
                                <input type="hidden" id="d" name="d" value=""/>
                                <input type="submit" id="submit" name="submit" value="Login" className="button palette01"/>
                                <div className="spacer30"></div>
                                <a href="/about/#memberships" className="button mini">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div className="4u"></div>

                </div>
            </form>
            <div className="spacer50"></div>
        </div>
    </section>
    <section className="wrapper">
        &nbsp;
    </section>
    </Fragment>

)};

export default LoginForm;