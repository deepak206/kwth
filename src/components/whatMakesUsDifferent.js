import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const WhatMakesUsDifferent = () => {
    return (
        <section className="wrapper style4">
            <div className="inner">
            <header>
                <h2 className="tac"><u>What makes us different from the rest?</u></h2>
                <p className="tac">We are not your typical hunt club.</p>
            </header>
            <ul className="features">
                <li>
                    <h3>Prime Private Fields</h3>
                    <p>We grew up in this area and know which fields are hot and which are not! KWTH selects the best fields for its members!</p>
                    <a className="button grey" onclick="on(1)">Learn More</a>
                </li>
                <li>
                    <h3>Lots &amp; Lots of Fields</h3>
                    <p>We have lots of fields for our members to choose from. If one field is not producing, we'll help you find one that is!</p>
                    <a className="button grey" onclick="on(2)">Learn More</a>
                </li>
                <li>
                    <h3>Personal Hunts</h3>
                    <p>If you are just looking for a field to setup your decoys on and hunt some birds, then we have all the fields you'll ever need!</p>
                    <a className="button grey" onclick="on(3)">Learn More</a>
                </li>
                <li>
                    <h3>Guided Hunts</h3>
                    <p>If you are interested in learning how the experts do it, KWTH has some of the best guides in the state! Special pricing for members!</p>
                    <a className="button grey" onclick="on(4)">Learn More</a>
                </li>
                <li>
                    <h3>Local Knowledge</h3>
                    <p>Our relationships with our farmers, WDFW officers, biologist, and local boys help us offer the best hunting experiences for our members!</p>
                    <a className="button grey" onclick="on(5)">Learn More</a>
                </li>
                <li>
                    <h3>Scouting Reports</h3>
                    <p>Between KWTH management, members, our farmers, and WDFW officers, we find out where the birds are and how they're behaving!</p>
                    <a className="button grey" onclick="on(6)">Learn More</a>
                </li>
                <li>
                    <h3>Blinds on Most Fields</h3>
                    <p>Between KWTH management, members, the farmers we work with, and WDFW officers, we got the scouting aspect under control! </p>
                    <a className="button grey" onclick="on(7)">Learn More</a>
                </li>
                <li>
                    <h3>Assistance</h3>
                    <p>Some of our fields are far away from the parking spots. When possible, KWTH helps its members get their gear out to the field!</p>
                    <a className="button grey" onclick="on(8)">Learn More</a>
                </li>
            </ul>
        </div>
    </section>
)};

export default WhatMakesUsDifferent;