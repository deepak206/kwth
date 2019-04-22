import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import ClosingStatementAbout from '../components/closingStatementAbout';

const ReserverField = () => {
        return(
            <Fragment>
                <Header/>
                <Fragment>
                <section id="banner2"></section>
                <section class="wrapper">
					<div class="inner">
						<div class="toTopContainer"><a href="/hunting">
                        <img src={require('../assets/back.png')} class="toTop"/></a></div>
						<header>
							<h2 class="tac"><u>Reserve Field</u></h2>
						</header>
						<div class="spacer10"></div>
						<div class="spacer30"></div>
						<div class="tac"><img src={require('../assets/process-flow.png')}/></div>
						<div class="spacer30"></div>

						<div class="row uniform">
							<div class="12u tac">
								Once you have signed up and paid for your membership,<br/>you will have the ability to <strong>reserve fields</strong> for hunting!<br/><br/>
							</div>

							<div class="4u 12u$(xsmall)">
								<h3>&nbsp;</h3>
							</div>

							<div class="4u 12u$(xsmall)">
								<h4 class="tac">The process is simple...</h4>
								1. Login<br/>
								2. Click RESERVE A FIELD button<br/>
								3. Select the Field &amp; Date you want<br/>
								4. Invite other Members or Guests<br/>
								5. Answer a couple other questions<br/>
								6. DONE!
							</div>

							<div class="4u 12u$(xsmall)">
								<h3>&nbsp;</h3>
							</div>
						</div>

						<div class="tac">
							<div class="spacer50"></div>
							<div>
								<a href="/hunting/" class="button">Back</a><br/>
							</div>
							<div class="spacer50"></div>
						</div>
					</div>
				</section>

				<section class="wrapper">
					&nbsp;
				</section>
                </Fragment>
                <ClosingStatementAbout/> 
                <Footer />
            </Fragment>
        );
    }

export default ReserverField;
