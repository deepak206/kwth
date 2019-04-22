import React, {Component, Fragment} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';
import '../style/pricing.css';

class Memberships extends  Component {
    state = {
        activeOverlay: false,
        id: ''
    }

    toggelOverlay = (event,id) => {
        event.preventDefault();
        this.setState({activeOverlay: !this.state.activeOverlay,id: id})
    }

    closeOverlay= () => {
        this.setState({activeOverlay: !this.state.activeOverlay,id: ''})
    }

    overlayFour = () => (
    <div id="overlay4">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>Full-Season Membership</h3>
						<p>
							Our Full-Season Membership is the best deal we offer!<br/><br/>
							
							You could literally hunt 107 days for only $1000. Let's break that down so it really makes sense...
								</p><ul>
									<li>$9.35 per day to hunt your own private field. That's right - it's all yours. We don't make you share!</li>
									<li>$1.56 per goose, and that's only a one-man limit. Imagine if you and your friends all limited!</li>
									<li>$1.34 per duck (one-man limit).</li>
								</ul>

							Plus, if you want to purchase a Guided Hunt, there is a huge savings versus not being a member!
						<p></p>
					</div>
				</div>
			</section>
        </div>);
        
overlayFive = () => (
		<div id="overlay5">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>3 Hunt Membership</h3>
						<p>
							Our 3 Hunt Membership is a great deal - especially for those who know they will only be able to hunt two or three times!<br/><br/>
							
							With this membership, you can pick any three days during the 
season to hunt. Just like the Full-Season Membership, the field is all 
yours for the day 
							and we will never ask you to share with other members. However, 
you can invite other members to join you at no cost and you can even 
invite your friends to 
							hunt with you for only $125/ea.
						</p>
					</div>
				</div>
			</section>
		</div>);

        overlaySix = () => (
		<div id="overlay6">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>1 Hunt Membership</h3>
						<p>
							Our 1 Hunt Membership is a great deal for the hunter with limited free time!<br/><br/>
							
							With this membership, you can pick any (1) day during the season 
to hunt. Just like the other memberships, the field is all yours for the
 day and we will never ask you 
							to share with other members. If you want to invite your friends 
to hunt with you, the cost is only $125/ea.
						</p>
					</div>
				</div>
			</section>
		</div>);

        overlaySeven = () => (
		<div id="overlay7">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3 class="tac">We are not accepting memberships at this time</h3>
						<div class="spacerFloat50"></div>
						<p class="tac">
							We thank you for your interest in <strong>Know Where To Hunt</strong>.  We are not accepting memberships at this time.<br/><br/>
							If you would like to be notified as to when we <u>are</u> accepting memberships, please send us an email at <strong><u><a href="mailto:support@knowwheretohunt.com?subject=Notify Me&amp;body=Please email me when you are ready to accept memberships">support@knowwheretohunt.com</a></u></strong> and we will add you to our Notifications list.
						</p>
					</div>
				</div>
			</section>
		</div>);

    render() {

        const {id, activeOverlay} = this.state;
    return (
        <Fragment>
        <section className="wrapper">

                <div id="memberships" className="toTopContainer">
                    <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
                </div>
                <header>
                    <h2 className="tac"><u>Memberships</u></h2>
                    <div className="spacer20"></div>
                </header>
                <div className="pricing-wrapper clearfix">

                    <div className="pricing-table">
                        <h3 className="pricing-title palette01">Full-Season<br/>Membership</h3>
                        <div className="price">
                            $1000<br/>
                            <sup>UNLIMITED HUNTS</sup><br/>
                            <sup className="payment"><i>Payment Plans Available</i></sup>
                        </div>

                        <ul className="table-list">
                            <li>Unlimited Self-Guided Hunts</li>
                            <li className="grey">Discounted Guided Hunts</li>
                            <li>Free Guest Pass</li>
                            <li className="grey">Guests: $125/ea.</li>
                            <li>Scouting Reports</li>
                        </ul>

                        <div className="pricing-footer"><a className="button palette01 big" onClick={(event) => this.toggelOverlay(event,7)}>Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onClick={(event) => this.toggelOverlay(event,4)}>More Information</a></div>
                        <br/>
                    </div>
                    <div className="pricing-table">
                        <h3 className="pricing-title palette02">Three Hunts<br/>Membership</h3>
                        <div className="price">
                            $500<br/>
                            <sup>3 HUNTS</sup><br/>
                            <sup className="payment"><i>Payment Plans Available</i></sup>
                        </div>

                        <ul className="table-list">
                            <li>Three Self-Guided Hunts</li>
                            <li className="grey">Discounted Guided Hunts</li>
                            <li>N/A</li>
                            <li className="grey">Guests: $125/ea.</li>
                            <li>Scouting Reports</li>
                        </ul>

                        <div className="pricing-footer"><a className="button palette02 big" onClick={(event) => this.toggelOverlay(event,7)}>Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onClick={(event) => this.toggelOverlay(event,5)}>More Information</a></div>
                        <br/>
                    </div>
                    <div className="pricing-table">
                        <h3 className="pricing-title palette03">One Hunt<br/>Membership</h3>
                        <div className="price">
                            $275<br/>
                            <sup>1 HUNT</sup><br/>
                            <sup className="payment"><i>Payment Due at Reservation</i></sup>
                        </div>

                        <ul className="table-list">
                            <li>One Self-Guided Hunt</li>
                            <li className="grey">N/A</li>
                            <li>N/A</li>
                            <li className="grey">Guests: $125/ea.</li>
                            <li>N/A</li>
                        </ul>

                        <div className="pricing-footer"><a className="button palette03 big" onClick={(event) => this.toggelOverlay(event,7)}>Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onClick={(event) => this.toggelOverlay(event,6)}>More Information</a></div>
                        <br/>
                    </div>
                </div>
			</section>
            {activeOverlay && id === 4 && this.overlayFour()}
            {activeOverlay && id === 5 && this.overlayFive()}
            {activeOverlay && id === 6 && this.overlaySix()}
            {activeOverlay && id === 7 && this.overlaySeven()}
            </Fragment>
)}};


export default Memberships;