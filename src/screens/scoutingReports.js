import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import ClosingStatementAbout from '../components/closingStatementAbout';
import history from '../history';

const getRoute = (route) => {
    history.push(route);
}

const ScoutingReports = () => {
        return(
            <Fragment>
                <Header/>
                <Fragment>
                <section id="banner2"></section>
                <section class="wrapper">
					<div class="inner">
						<div class="toTopContainer">
						<a href="" onClick={() => getRoute('/hunting')}>
                        <img src={require('../assets/back.png')} class="toTop"/></a></div>
						<header>
							<h2 class="tac"><u>Scouting Reports</u></h2>

						</header>
						<div class="spacer30"></div>
						<div class="tac">
                        <h4 class="tac">No Reports Yet</h4>
						
						</div>

						<div class="spacer100"></div>
						<div class="spacer100"></div>
						<div class="spacer100"></div>

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

export default ScoutingReports;
