import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import ClosingStatement from '../components/closingStatement';
import Footer from '../components/footer';
import history from '../history';

class WhyBecomeMember extends Component {
	getRoute = (route) => {
        history.push(route);
	}
	
    render() {
        return(
            <Fragment>
                <Header/>
                <Fragment>
                <section id="banner2"></section>
                <section id="testimonials" class="wrapper style7">
					<div class="inner">
						<div class="toTopContainer"><a href="" onClick={() => this.getRoute('/about')}>
                        <img src={require('../assets/back.png')} class="toTop"/></a>
                        </div>
						<header>
							<h2 class="tac"><u>Why Should I Become a Member</u></h2>
							<div class="spacer20"></div>
						</header>

						<h2>Prime Private Land</h2>
						<blockquote>
							We grew up in Skagit County and have hunted here for the past 35 
years. We know the farmers, the fields, and the flyways. That's why KWTH
 works 
							with select farmers and chooses the best fields possible for its 
members!
						</blockquote>

						<hr/>

						<h2>Blinds</h2>
						<blockquote>
							You want blinds - well we've got them!<br/><br/>

							Most of our fields have blinds on them. KWTH has one or two Blind
 Building parties before the start of each season where members can join
 and make contributions 
							and recommendations on blind locations and construction. We 
figure <u>you</u> are the ones who will be using them, so <u>you</u> should have the say!<br/><br/>

							But just because a field has a blind on it, that doesn't mean you
 have to use it! If you would rather bring your own layout blind or hunt
 from a ditch line, that's totally 
							fine with us - as long as the rules allow it. You can visit the 
Property Details page on the Know Where To Hunt website to learn about 
each field and its rules!
						</blockquote>

						<hr/>

						<h2>Ethical Hunting</h2>
						<blockquote>
							Man, we've all been there! We've all spent two hours getting our 
decoys setup only to have some knuckleheads sit 50 yards away from us 
and skybust 
							all day - totally ruining our hunt!
						</blockquote>

						<hr/>

						<h2>Bye Bye Combat Hunting</h2>
						<blockquote>
							Don't you love getting up at 2:00am and trying to beat every 
other hunter to the field? How about that 10-shell limit rule enforced 
at the Public Hunt locations?<br/><br/>

							Just imagine having a field all to yourself - that means <u>you</u> can hunt it alone all day OR <u>you</u> can invite friends to join you! KWTH does not force members
							to share fields with other members! Once you reserve a field, you're the boss!
						</blockquote>

						<hr/>

						<h2>Knowledge</h2>
						<blockquote>
							If you are new to hunting or just want to see how some of the 
Pros do it, we've got some of the best guides in the state! These guys 
are always willing to answer your 
							questions. But we strongly recommend scheduling a Guided Hunt so 
you can get out in the fields with these guys and spend some time 
watching them in action, listening 
							to them call birds, and asking them any questions you might have!
						</blockquote>

						<hr/>

						<h2>Rentals</h2>
						<blockquote>
							KWTH has Snow Goose and Mallard decoys for rent should a member 
desire to have a larger spread! We also have Layout Blind rentals should
 members want to hunt from 
							a location other than the field blind.<br/><br/>

							You will be presented with the option to rent decoys/blinds during the "Reserve Field" process.
						</blockquote>

						<hr/>

						<h2>Giving Back</h2>
						<blockquote>
							One thing that KWTH does that makes us stand out from other hunting clubs is "working with our farmers/landowners <u>after</u> season" to help them protect their land.<br/><br/>

							For instance; our Dairy farmers rely on their land to feed their 
cows. So after season is over, KWTH starts their "Hazing" program to 
keep ducks, geese, and swans off of the 
							grass &amp; winter wheat fields. We have many techniques for this
 and are always trying new and creative ways to keep these birds from 
demolishing our farmer's crops!<br/><br/>

							We also work with WDFW officers to keep them informed of any 
activities that could potentially result in confrontations (i.e. Bird 
Watchers and Hunters enjoying the same properties).
						</blockquote>

						<hr/>

						<h2>Assistance</h2>
						<blockquote>
							We are not exactly a bunch of young guys ourselves so we totally 
understand when hunters could use a little help getting their gear out 
to the fields!<br/><br/>

							KWTH tries its best to run a quality operation and help our 
members get their decoys and gear out to the blinds. We cannot promise 
to help everybody, especially if there are 
							several hunts happening at once. But we do our best to identify 
our members with special needs and our fields with the longest distance 
between the parking spot and the blind. 
							Those receive our highest attention!
						</blockquote>

					</div>

				</section>
                </Fragment>
                <ClosingStatement />
                <Footer />
            </Fragment>
        );
    }
}

export default WhyBecomeMember;
