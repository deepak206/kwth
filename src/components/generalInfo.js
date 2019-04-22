import React,{Component, Fragment} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

class GeneralInfo extends Component {
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

    overlayOne = () => (
        <div id="overlay1">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>Improve It</h3>
						<p>
							While out in the field, if you see garbage, please pick it up. If
 you see a fence post on its side, please stand it back up. Treat the 
property like your 
							own and the landowners will appreciate it. I guarantee they will 
notice! We've never met a farmer who didn't know every square foot of 
his/her property. 
						</p>
					</div>
				</div>
			</section>
        </div>
    );
        
    overlayTwo = () => (
		<div id="overlay2">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>Protect It</h3>
						<p>
							Being a member of Know Where to Hunt means you are part of an 
elite group of hunters with access to some amazing properties. You've 
legally signed-up 
							and paid for this privilege to become a member, so protect that 
privilege. If you see a vehicle parked at one of the many Know Where to 
Hunt properties, 
							take a minute to ensure that they are allowed to be there. As a 
member, you have access to tools on the website that can immediately let
 you know if the 
							vehicle is an active member or not. If that vehicle does belong 
to an active member, these tools will also inform you if that member is 
scheduled to hunt 
							that day or not.<br/><br/>

							In addition to this, if you witness another member breaking any 
of the rules, you should immediately report them. Remember, it only 
takes one selfish 
							member to ruin it for all members.  
						</p>
					</div>
				</div>
			</section>
        </div>
        );
        
    overlayThree = () => (
		<div id="overlay3">
			<section class="wrapper">
				<div class="inner">
					<header class="major">
						<div class="spacerFloat50"></div>
						<div class="closebtn tar" onClick={this.closeOverlay}>x</div>
					</header>
					<div class="inner">
						<h3>Share It</h3>
						<p>
							As a Know Where to Hunt member, you have access to properties 
that the rest of the world does not. This is an absolute blessing and 
should be shared 
							with friends and family. That is why all "Full-Season" membership
 comes with a one-day guest pass that can be used whenever you choose. 
Once used, 
							additional guest passes can be purchased.<br/><br/>

							Don't feel like hunting alone? Using the Membership Directory, 
you can always invite another Know Where to Hunt member to go hunting 
with you. This is 
							a great way to meet other members and establish new friendships!
						</p>
					</div>
				</div>
			</section>
        </div>);
        
    render() {
        const {id, activeOverlay} = this.state;
    return (
        <Fragment>
        <section className="wrapper style6">
        <div className="inner">
            <div id="general" className="toTopContainer">
                <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
            </div>
            <header>
                <h2 className="tac"><u>General Info</u></h2>
                <div className="spacer20"></div>
            </header>

            <div className="inner">
                <h3>About</h3>
                <p className="hideFromPhone">
                    Know Where to Hunt, LLC was formed by avid outdoor enthusiasts 
with a mission to link responsible hunters to prime hunting land. We 
accomplish this by building solid relationships 
                    with the landowners and bridging the gap to our active members. 
We work throughout the year with the landowners to ensure that their 
wishes are being met (if not exceeded). 
                    The product of these relationships is better and more diverse 
hunting opportunities for Know Where to Hunt members. We look forward to
partnering with you!
                </p>
            </div>
            
            <hr/>

            <div className="inner">
                <h3>Our Goals</h3>
                <p>
                    Here at Know Where to Hunt, LLC, our overall goal is to give you
the best outdoor experience we can deliver. We love to hunt and we 
recognize it as a privilege. 
                    But over the years we have learned from local landowners and 
hunters themselves, that many of the waterfowl hunters have never asked 
for permission and often 
                    just assume that because the property is NOT posted, that means 
they can hunt it. Through our relationships, we have found this is not 
the case!<br/><br/>

                    We understand, when the wind is blowing and the ducks are 
decoying, it's hard not to want to stay all day and have a blast. We 
have also seen firsthand how not 
                    allowing the birds to rest will negatively affect the hunting. 
That is why we monitor each field's usage closely and institute Rest 
Days when necessary. This allows 
                    the birds to come back into the fields - keeping them viable for
hunting. The Know Where to Hunt team holds higher expectations of its 
leadership AND members. 
                    We believe in following the rules, honoring the wishes of the 
landowner, being grateful for the day's harvest, and hunting with 
integrity.<br/><br/>

                    Any landowner that has partnered with Know Where to Hunt, LLC to
allow its members to hunt their land, is doing so because he/she wants 
you to enjoy yourselves 
                    in a responsible manner. We all need to remember, this is their 
land, not yours and not ours. Anytime we are hunting, we are guests and 
should always conduct 
                    ourselves in such a manner. The landowner can back-out ANYTIME 
he/she wishes and within a few hours, all "Know Where to Hunt Member's 
Only" signs will be 
                    pulled and replaced with “No Hunting" signs - rendering that 
property unavailable for hunting! This is the last thing we all want to 
see.<br/><br/>

                    Therefore, we strongly encourage our members to not only take 
great care of the property they have been allowed to hunt, but also to 
look for opportunities to  
                    <a className="xlinkWhite" onClick={(event) => this.toggelOverlay(event,1)}>improve it</a>, 
                    <a className="xlinkWhite" onClick={(event) => this.toggelOverlay(event,2)}>protect it</a>, and 
                    <a className="xlinkWhite" onClick={(event) => this.toggelOverlay(event,3)}>share it</a> with others. 
                </p>
            </div>
            
            <hr/>

            <div className="inner">
                <h3>How It Works</h3>
                <p>
                    Know Where to Hunt has three Membership packages to choose from; Full-Season, 3-Hunt, and 1-Hunt!<br/><br/>

                    <u>Full-Season Membership</u>   $1000<br/>
                    Our Full-Season Membership package offers the biggest bang for 
your buck! This membership gives you unlimited bookings throughout the 
season! It also comes with 
                    a Free 1-Hunt Guest Pass so you can bring a friend out and let 
him/her see what Know Where to Hunt is all about!<br/><br/>

                    <u>3-Hunt Membership</u>   $500<br/>
                    Our 3-Hunt Membership package is a great option for someone who 
only gets out a couple times each season! It is also a great choice if 
you have some buddies 
                    visiting from out-of-town and you want to take them out for a 
few hunts!<br/><br/>

                    <u>1-Hunt Membership</u>   $275<br/>
                    Our 1-Hunt Membership package is perfect for that hunter who 
doesn't have a lot of free time and just wants to get out once every 
season!
                </p>

                <p>
                    Once you have successfully signed up and paid for your Know Where to Hunt membership, you can start reserving fields!<br/><br/>

                    Any member can have up to 2 hunts in his/her queue. This keeps 
members from locking down a certain field, allowing other members 
                    the opportunity to hunt the field.<br/><br/>

                    Know Where to Hunt management closely monitors all field 
activity. If a particular field is getting hunted a lot, we institute 
mandatory "REST" days. This gives the 
                    birds a break and allows them to repopulate the field!
                </p>
            </div>

        </div>
    </section> 
    {activeOverlay && id === 1 && this.overlayOne()}
    {activeOverlay && id === 2 && this.overlayTwo()}
    {activeOverlay && id === 3 && this.overlayThree()}
    </Fragment> 
)}};

export default GeneralInfo;