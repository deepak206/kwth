import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const ClosingStatementAbout = () => {
    return (
        <section id="cta" className="wrapper style7">
		<div className="inner">
			<header>
				<h2>Become a Member</h2>
				<p>Join our elite group of waterfowl hunters!</p>
				<p></p>Discover some of the best waterfowl hunting Western Washington has to offer!<p></p>
			</header>
			<ul className="actions vertical">
				<li>
                    <a href="/about/#memberships" className="button fit palette02">Sign Up Now</a>
                </li>
				<li>
                    <a href="/whyshouldibecomeamember" className="button fit">Learn More</a>
                </li>
			</ul>
		</div>
	    </section>
)};

export default ClosingStatementAbout;