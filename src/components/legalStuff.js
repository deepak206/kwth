import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const LegalStuff = () => {
    return (
    <section class="wrapper">
        <div class="inner">
            <div id="legal" class="toTopContainer">
            <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
            </div>
            <header>
                <h2 class="tac"><u>Legal Stuff</u></h2>
                <div class="spacer20"></div>
            </header>

                <div class="row uniform tac">

                    <div class="4u 12u(xsmall)">
                        <a href="https://www.knowwheretohunt.com/about/downloads/KWTH-Terms-And-Conditions.pdf" target="_blank" class="button palette01">Terms &amp; Conditions</a>
                    </div>
                    <div class="4u 12u(xsmall)">
                        <a href="https://www.knowwheretohunt.com/about/downloads/KWTH-Privacy-Policy.pdf" target="_blank" class="button palette02">Pricacy Policy</a>
                    </div>
                    <div class="4u 12u$(xsmall)">
                        <a href="https://www.knowwheretohunt.com/about/downloads/KWTH-Terms-Of-Use.pdf" target="_blank" class="button palette03">Terms of Use</a>
                    </div>

                    <div class="spacer50"></div>

                </div>

        </div>
    </section>
)};

export default LegalStuff;