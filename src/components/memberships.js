import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';
import '../style/pricing.css';

const Memberships = () => {
    return (
        <section className="wrapper">

                <div id="memberships" className="toTopContainer">
                    <img src={require('../assets/up.png')} className="toTop"/>
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

                        <div className="pricing-footer"><a className="button palette01 big" onclick="on(7)">Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onclick="on(4)">More Information</a></div>
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

                        <div className="pricing-footer"><a className="button palette02 big" onclick="on(7)">Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onclick="on(5)">More Information</a></div>
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

                        <div className="pricing-footer"><a className="button palette03 big" onclick="on(7)">Sign Up Now</a></div>
                        <br/>
                        <div className="tac"><a className="button mini" onclick="on(6)">More Information</a></div>
                        <br/>
                    </div>
                </div>
			</section>
)};

export default Memberships;