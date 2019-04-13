import React,{Component, Fragment} from 'react';
import '../style/index.css';
import '../style/camogreen.css';

class WhatMakesUsDifferent extends Component {
    state = {
        activeOverlay: false,
        id: ''
    }

    toggleOverlay = (event,id) => {        
        event.preventDefault();
        this.setState({activeOverlay: !this.state.activeOverlay, id: id})
    }

    closePhoto = () => {
        this.setState({activeOverlay: !this.state.activeOverlay, id: ''})
    }

    overlayOne = () => (
    <div id="overlay1">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Prime Private Fields</h3>
						<p>
							We grew up in Skagit County and have hunted here for the past 35 
years. We know the farmers, the fields, and the flyways. That's why KWTH
 works 
							with select farmers and chooses the best fields possible for its 
members!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlayTwo = () => (
		<div id="overlay2">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Lots &amp; Lots of Fields</h3>
						<p>
							KWTH is not interested in locking down every field in the county!
 We are just interested in making sure our members have opportunities 
and options!<br/><br/>

							We try to keep a ten-to-one ratio (10 members to one field). So 
if we have 50 members, we try to have a minimum of five fields. If we 
are blessed 
							to have more than that, then awesome! 
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlayThree = () => (
		<div id="overlay3">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Personal Hunts</h3>
						<p>
							Most hunters are experienced hunters just looking for a place to 
setup some decoys and pull the trigger. KWTH knows this and that's why 
we promote the phrase 
							"<strong>Connecting Responsible Hunters to Prime Hunting Land</strong>".<br/><br/>
							
							Our goal is to help those who need help (learning to call, 
understanding decoy spreads, the importance of weather patterns, etc.) 
so eventually they can hunt like 
							a pro, and on their own!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlayFour = () => (
		<div id="overlay4">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Guided Hunts</h3>
						<p>
							We really do have some of the best guides around! Tony 
understands weather patterns and bird behavior like no other. Rick is 
constantly researching new techniques 
							and approaches and then seeing what works and what doesn't. These
 two guys compliment each other and we're thrilled to have them both on 
the KWTH team!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlayFive = () => (
		<div id="overlay5">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Local Knowledge</h3>
						<p>
							One of the coolest things about growing up in Skagit County and 
knowing most of the locals is... word gets around. I might walk in the 
store and see someone I know 
							and immediately that person associates me to KWTH and starts 
telling me about all of the ducks and geese they saw on such &amp; such 
field.<br/><br/>

							Having a good working relationship with WDFW officers and the 
farming community is a real plus too. We look for opportunities to help 
each other and identify ways to 
							make waterfowl hunting more successful and farming more 
profitable!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlaySix = () => (
		<div id="overlay6">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Scouting Reports</h3>
						<p>
							We watch our fields closely. KWTH keeps open lines of 
communication with its farmers and members to find out what they are 
seeing in the valley! We also drive the 
							fields daily and perform visual checks. We spend time glassing 
our fields (using binoculars) and studying bird behavior so we can 
report our findings back to our members!<br/><br/>

							Our goal is to keep our members well informed so they can make the best use of their precious time!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlaySeven = () => (
		<div id="overlay7">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Blinds on Most Fields</h3>
						<p>
							We have blinds on <u>most</u> of our fields. We could build blinds on every field but we want to be able to offer members a variety.<br/><br/>

							Some members would rather hunt from layout blinds or ditch lines.
 They have told us that a field without a blind offers a more natural 
environment for the birds 
							and they believe that enchances their hunting experience.
						</p>
					</div>
				</div>
			</section>
        </div>);
        
        overlayEight = () => (
		<div id="overlay8">
			<section className="wrapper">
				<div className="inner">
					<header className="major">
						<div className="spacerFloat50"></div>
						<div className="closebtn tar" onClick={this.closePhoto}>x</div>
					</header>
					<div className="inner">
						<h3>Assistance</h3>
						<p>
							Some of our fields are 3/4 mile away from the parking lot. Some 
of our members have bad knees or backs. Some members like to bring a lot
 of decoys out! 
							Sometimes members just need help!<br/><br/>

							KWTH gives special attention to members who need assistance or 
members who reserve certain fields (with long walks). If possible, we 
will meet our members 
							at the field and help them get their gear and them our to the 
field using our ATVs.
						</p>
					</div>
				</div>
			</section>
        </div>);
        
    render() {
        const {id, activeOverlay} = this.state;
        console.log(id, activeOverlay);
    return (
        <Fragment>
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
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'1')}>Learn More</a>
                </li>
                <li>
                    <h3>Lots &amp; Lots of Fields</h3>
                    <p>We have lots of fields for our members to choose from. If one field is not producing, we'll help you find one that is!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'2')}>Learn More</a>
                </li>
                <li>
                    <h3>Personal Hunts</h3>
                    <p>If you are just looking for a field to setup your decoys on and hunt some birds, then we have all the fields you'll ever need!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'3')}>Learn More</a>
                </li>
                <li>
                    <h3>Guided Hunts</h3>
                    <p>If you are interested in learning how the experts do it, KWTH has some of the best guides in the state! Special pricing for members!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'4')}>Learn More</a>
                </li>
                <li>
                    <h3>Local Knowledge</h3>
                    <p>Our relationships with our farmers, WDFW officers, biologist, and local boys help us offer the best hunting experiences for our members!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'5')}>Learn More</a>
                </li>
                <li>
                    <h3>Scouting Reports</h3>
                    <p>Between KWTH management, members, our farmers, and WDFW officers, we find out where the birds are and how they're behaving!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'6')}>Learn More</a>
                </li>
                <li>
                    <h3>Blinds on Most Fields</h3>
                    <p>Between KWTH management, members, the farmers we work with, and WDFW officers, we got the scouting aspect under control! </p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'7')}>Learn More</a>
                </li>
                <li>
                    <h3>Assistance</h3>
                    <p>Some of our fields are far away from the parking spots. When possible, KWTH helps its members get their gear out to the field!</p>
                    <a className="button grey" onClick={(event) => this.toggleOverlay(event,'8')}>Learn More</a>
                </li>
            </ul>
        </div>
    </section>
        {activeOverlay && id == 4 && this.overlayFour()}
    {activeOverlay && id == 5 && this.overlayFive()}
    {activeOverlay && id == 6 && this.overlaySix()}
    {activeOverlay && id == 7 && this.overlaySeven()}
    {activeOverlay && id == 3 && this.overlayThree()}
    {activeOverlay && id == 2 && this.overlayTwo()}
    {activeOverlay && id == 1 && this.overlayOne()}
    {activeOverlay && id == 8 && this.overlayEight()}
    </Fragment>

)}};

export default WhatMakesUsDifferent;