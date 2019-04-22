import React, {Fragment} from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const ForgotPasswordForm = () => {
    return (
        <Fragment>
        <section id="banner2"></section>
        <section class="wrapper">
        <div class="inner">
            <header>
                <h2 class="tac"><u>Forgot Password</u></h2>

            </header>

            <form id="formLogin" name="formLogin" method="post" action="URL/login/forgot-password-validate.asp">
                <div class="row uniform">

                    <div class="4u"></div>
                    <div class="4u 12u$(xsmall)">
                        <h4>Email Address</h4>
                        <input type="text" name="email" id="email" value="" placeholder="Email Address"/><br/>
                        <div style="width: 304px; height: 78px;"><div>
                            {/* captcha */}
                        </div></div><br/>
                        <ul class="actions tar">
                            <li>
                                <input type="hidden" id="d" name="d" value=""/>
                                <input type="submit" id="submit" name="submit" value="Submit" class="button palette01"/>
                            </li>
                        </ul>
                    </div>
                    <div class="4u"></div>
                </div>
            </form>
            <div class="spacer50"></div>
        </div>
    </section>

    <section class="wrapper">
        &nbsp;
    </section>
    </Fragment>

)};

export default ForgotPasswordForm;