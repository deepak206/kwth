import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const WhyShouldIBecomeAMember = () => {
    return (
    <section className="wrapper style2">
        <div className="inner tac">
            <header>
                <h2 id="one" className="tac"><u>Why Should I Become a Member?</u></h2>
                <p>Get access to some of the best private waterfowl hunting fields in Skagit County!</p>
                <p>Avoid the 15-shell limit, long lines and over-hunted fields associated to "public hunts"!</p>
                <p>Learn tried and true hunting techniques from seasoned guides and members!</p>
            </header>

            <img src={require('../assets/collage.png')} />
            <br /><br />
            <ul className="actions">
                <li>
                    <a href="/about/#memberships" className="button palette02">Membership Prices</a>
                </li>
            </ul>
        </div>
    </section>
)};

export default WhyShouldIBecomeAMember;