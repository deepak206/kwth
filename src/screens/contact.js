import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import ClosingStatement from '../components/closingStatement';
import Footer from '../components/footer';

class Contact extends Component {
    
    render() {
        return(
            <Fragment>
                <Header/>
                <Fragment>
                <section id="banner2"></section>
                <section className="wrapper">
					<div className="inner">
						<header>
							<h2 className="tac"><u>Contact KWTH</u></h2>

						</header>
						<div className="spacer30"></div>

						<form id="formContact" name="formContact" method="post" action="contact-validate.asp">
							<div className="row uniform">

								<div className="6u 12u$(xsmall)">
									<h4>First &amp; Last Name</h4>
									<input type="text" name="flname" id="flname" placeholder="First &amp; Last Name"/>
									
									<div className="spacer50"></div>

									<h4>Email Address</h4>
									<input type="text" name="email" id="email" placeholder="Email Address"/>
								</div>
								<div className="6u$ 12u$(xsmall)">
									<h4>Message</h4>
									<textarea name="message" id="message" rows="6"></textarea>
								</div>

								<div className="12u$">
									<ul className="actions tar">
										<li>
											<input type="submit" id="submit" name="submit" value="Send" className="button palette01"/>
										</li>
									</ul>
								</div>

							</div>
						</form>
					</div>
				</section>

				<section className="wrapper">
					&nbsp;
				</section>
                </Fragment>
                <ClosingStatement />
                <Footer />
            </Fragment>
        );
    }
}

export default Contact;
