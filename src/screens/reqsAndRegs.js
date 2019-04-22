import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import ClosingStatementAbout from '../components/closingStatementAbout';
import history from '../history';
import { Link } from 'react-router-dom';

const getRoute = (route) => {
    history.push(route);
}

const ReqsAndRegs = () => {
        return(
            <Fragment>
                <Header/>
                <Fragment>

                    <section id="banner2"></section>
                    <section className="wrapper">
					<div className="inner">
						<div className="toTopContainer">
						<a href="" onClick={() => getRoute('/hunting')}>
                        <img src={require('../assets/back.png')} className="toTop"/></a></div>
						<header>
							<h2 className="tac"><u>Reqs &amp; Regs</u></h2>

						</header>
					</div>
				</section>



				<section className="wrapper style2">
					<div className="inner tac">

						<h4 className="tac">Waterfowl Hunting in Skagit County</h4>
						<div className="spacer20"></div>

						<table className="table black hideMePhoneTable">
							<tbody><tr><th className="bgPalette01" width="450">Required Documents</th>
							<th className="tac bgPalette01">Ducks (<i>Puddle Ducks</i>)</th>
							<th className="tac bgPalette01">Snow Goose</th>
							<th className="tac bgPalette01">Canada Goose</th>

							</tr><tr className="tac">
								<td className="tal">Small Game License &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$40.50</span></td>
								<td>X</td>
								<td>X</td>
								<td>X</td>
							</tr>

							<tr className="tac">
								<td className="tal">Migratory Bird Permit &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$17</span></td>
								<td>X</td>
								<td>X</td>
								<td>X</td>
							</tr>

							<tr className="tac">
								<td className="tal">Federal Duck Stamp &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$10</span></td>
								<td>X</td>
								<td>X</td>
								<td>X</td>
							</tr>

							<tr className="tac">
								<td className="tal">Harvest Card &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$13.20</span><br/><span className="textSmlNoLink">You must call WDFW for pre-authorization (360) 902-2464</span></td>
								<td>&nbsp;</td>
								<td>X</td>
								<td>&nbsp;</td>
							</tr>
						</tbody></table>

						<div className="hideMeDesktop">
							<div className="row uniform tac">

								<div className="3u 12u(xsmall)">&nbsp;</div>
								<div className="6u 12u(xsmall)">
									<h3 className="tac underline">Ducks (Puddle Ducks)</h3>
									<div className="textReg tac"><i>Required Documents</i></div>
									<div className="spacer20"></div>
									<div className="tal">Small Game License &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$40.50</span></div>
									<div className="tal">Migratory Bird Permit &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$17</span></div>
									<div className="tal">Federal Duck Stamp &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$10</span></div>

									<div className="spacer80"></div>

									<h3 className="tac underline">Snow Goose</h3>
									<div className="textReg tac"><i>Required Documents</i></div>
									<div className="spacer20"></div>
									<div className="tal">Small Game License &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$40.50</span></div>
									<div className="tal">Migratory Bird Permit &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$17</span></div>
									<div className="tal">Federal Duck Stamp &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$10</span></div>
									<div className="tal">Harvest Card &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$13.20</span><br/><span className="textSmlNoLink">You must call WDFW for pre-authorization (360) 902-2464</span></div>

									<div className="spacer80"></div>

									<h3 className="tac underline">Canada Goose</h3>
									<div className="textReg tac"><i>Required Documents</i></div>
									<div className="spacer20"></div>
									<div className="tal">Small Game License &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$40.50</span></div>
									<div className="tal">Migratory Bird Permit &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$17</span></div>
									<div className="tal">Federal Duck Stamp &nbsp;&nbsp;&nbsp;<span className="textYellow fr">$10</span></div>
								</div>
								<div className="3u 12u(xsmall)">&nbsp;</div>

							</div>
						</div>

					</div>
				</section>

				<section className="wrapper style4">
					<div className="inner">
						<h4 className="tac">2018-2019 Washington Waterfowl Regulations</h4>
						<div className="tac"><a href="https://www.knowwheretohunt.com/hunting/wdfw02003.pdf" target="_blank">
                        <img src={require('../assets/wdfwRegs.png')} /></a>
                        </div>
						<div className="spacer70"></div>
					</div>
				</section>

				<section className="wrapper">
					<div className="inner">

						<h3 className="tac">Dates to Remember</h3>
						<div className="spacer50"></div>

						<div className="tac textLrg underline">November 1st &amp; 2nd (2018)</div>
						<div className="tac textReg">
							No Duck Hunting (except Scaup)<br/>
							<i>Two-Day Break in Duck Hunting Season</i>
						</div>
						<div className="spacer50"></div>

						<div className="tac textLrg underline">November 26th - December 7th (2018)</div>
						<div className="tac textReg">
							No Goose Hunting (All Geese)<br/>
							<i>Two-Week Break in all Goose Hunting</i>
						</div>
						<div className="spacer50"></div>

						<div className="tac textLrg underline">February 9th - 20th (2019)</div>
						<div className="tac textReg">
							Late Season Goose Hunting (Snow, Ross', and Blue Geese)<br/>
							<i>12 Days to hunt on Private land only</i>
						</div>
						<div className="spacer50"></div>

					</div>
				</section>
                </Fragment>
                <ClosingStatementAbout/> 
                <Footer />
            </Fragment>
        );
    }

export default ReqsAndRegs;
