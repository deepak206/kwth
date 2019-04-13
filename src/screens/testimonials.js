import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import Header from '../components/header';
import ClosingStatement from '../components/closingStatement';
import Footer from '../components/footer';

class Testimonials extends Component {
    
    render() {
        return(
            <div id="page-wrapper">
                <Header/>
                <section id="banner2"></section>
				<section id="testimonials" className="wrapper style7">
					<div className="inner">
						<div className="toTopContainer">
                        <a href="/about/">
                        <img src={require('../../assets/back.png')} className="toTop"/></a>
                        </div>
						<header>
							<h2 className="tac"><u>Testimonials</u></h2>
							<div className="spacer20"></div>
						</header>

						<h5>Eric (Member)</h5>
						<blockquote>
							I grew up waterfowl hunting in Montana and had many great 
experiences there, but NEVER have I had a waterfowl season as successful
 as the one just finished 
							with KWTH ('16/'17 season.) It was simply incredible.<br/><br/>
		My 16-year old son and I had two spectacular snow goose hunts 
(one guided and another self-guided) and numerous outings where we shot 
all the mallards we 
							could hit. We didn't get skunked a single time, which was a huge 
switch from the mostly fruitless years we searched for opportunities on 
public land.<br/><br/>
		If you want waterfowl hunting success--real, consistent success--stop wasting valuable time.<br/><br/>
		Make the investment in KWTH. It is 100% completely worth it.
						</blockquote>

						<hr/>

						<h5>Darren (Farmer)</h5>
						<blockquote>
							The guys from Bellingham Automotive and Burlington Automotive 
scheduled a hunt with KWTH! Oh what a blast! There were anywhere from 
1500 to 2000 snow 
							geese flying 20 yards overhead while our guide Tony worked the 
calls. Then you hear... “quiet guys, don't move, wait…, SHOOT! Oh, who 
could ask for more? 
							We all shot more than we hit! Opportunity was not lacking! We got
 birds and had a blast!<br/><br/>
		We also jump-shot ducks on a nearby ditch. KWTH is the real deal!
 The fields hold all the opportunity you can handle! Thank you KWTH and 
Tony for a dream 
							hunt! Who would have thought – right here in Skagit county! Your 
guide Tony made it happen! Thanks again, we all had the hunt of a life 
time!
						</blockquote>

						<hr/>

						<h5>Jef (Member)</h5>
						<blockquote>
							I went on a guided hunt in the middle of November for snow geese.
 Tony Saldivar's experience showed in the realism of the decoy spread 
and the 
							mad-minute we limited out in geese!<br/><br/>
		After we packed up and headed out, Tony took the time to show me 
around some of the fields, explaining what works and why. In my 
experience this is what 
							separates the good from the great; a willingness to help others 
get better and share all the secrets to hunting. It was also good to see
 the same drive in his 
							son Kendall, who played no small part in the days success (the 
kid is a goose whisperer).<br/><br/>
		The hunt was exciting, but Tony's willingness to share what he 
has learned made this all the more valuable to me. Between his knowledge
 sharing and KWTH 
							field access, a low-experience waterfowler like me can get out in
 the field a whole lot more than any other operation I’ve come across.
						</blockquote>

						<hr/>

						<h5>Richard (Member)</h5>
						<blockquote>
							Five Star Operation. These guys are the best - helpful, 
knowledgeable, and professional. Best game on the west side. They do all
 the leg work for you.
						</blockquote>

						<hr/>

						<h5>Jedidiah (Member)</h5>
						<blockquote>
							Had a great time. Thank you for what you, Rick and Tony do!
						</blockquote>

						<hr/>

						<h5>Todd (Member)</h5>
						<blockquote>
							A HUGE Thank You to You Duck Commander! You run a top notch operation with top notch guides! All the Best
						</blockquote>

						<hr/>

						<h5>Todd (Member)</h5>
						<blockquote>
							A HUGE Thank You to You Duck Commander! You run a top notch operation with top notch guides! All the Best
						</blockquote>

						<hr/>

						<h5>Jordy (Member)</h5>
						<blockquote>
							Very much enjoyed the membership and experience Dave.  Looking forward to next year.
						</blockquote>

						<hr/>

						<h5>Luke (Member)</h5>
						<blockquote>
							Joining Know Where to Hunt has been a game changing decision. 
Life tends to get a little hectic at times and that's where KWTH steps 
in. Knowing that I 
							would have much less time to scout this season, KWTH has been a 
fantastic resource. The scouting reports are very helpful and being able
 to examine the 
							properties before heading out hunting (via satellite maps) is a 
great first step to a successful hunt. Furthermore, the pricing is very 
reasonable.<br/><br/>
		While the information on the site has been useful, the guys who 
run KWTH have been great to work with. They're great people and are 
extremely friendly. 
							They promptly return any phone calls and are more than happy to 
talk with you about any questions you may have. Even if they don't have 
an answer right 
							away they will look into your inquiry and get back to you. 
Overall, my experience with KWTH has been fantastic. Keep up the good 
work guys!!"
						</blockquote>

						<hr/>

						<h5>Travis (Member)</h5>
						<blockquote>
							Team KWTH, I wanted to thank you for the service your team has 
provided to responsible hunters. This has been a great opportunity for 
us to hunt private 
							land and have a terrific opportunity to harvest waterfowl. Your 
team has been friendly, helpful, and manages the properties with 
complete integrity. Not only 
							that, but you have put us on the birds every hunt so far! This is
 a great service and I am thrilled to be a part of KWTH.
						</blockquote>

						<hr/>

						<h5>Brian (Member)</h5>
						<blockquote>
							Jacob and I had a wonderful time yesterday. Tony is probably one 
of the best guides I have dealt with. His son Kendall is going to be a 
good one as well. 
							Between the two of them calling birds and the decoy spread they 
put out, we were pulling birds from quite a distance off.<br/><br/>
		Had Jacob and I adjusted better to the high winds, we most 
certainly would have limited on Snows. As it was I could not have been 
more proud of Jacob. 
							I can't thank you guys enough for the opportunity that you offer 
and again for your guide's expertise and knowledge. We will be using 
your services again 
							before the end of the year.
						</blockquote>

						<hr/>

						<h5>Dean (Member)</h5>
						<blockquote>
							Know Where To Hunt provides opportunities for those that don't know where to go to get out and get birds.<br/><br/>
		My experience has been that landowners are not letting people 
they don't know hunt their properties. Well now I get the opportunity to
 hunt fields I 
							normally wouldn't be able to hunt through Know Where To Hunt.<br/><br/>
		Everyone should be respectful of the land and opportunities we 
are given and as members of KWTH we are required to keep the fields 
clean and leave 
							them as we found them. This should be the standard for all 
hunters in general, but as a KWTH member it is a requirement. KWTH keeps
 the standards 
							high and the lands open for all members to hunt!<br/><br/>
		Support the commitment that has been started with KWTH, 
landowners and the members. We all have to stick together to provide 
future opportunities 
							for the upcoming hunters! Join KWTH and keep the fields open for 
the future.
						</blockquote>

						<hr/>

						<h5>Hunter (Member)</h5>
						<blockquote>
							I really enjoyed my trip to Washington and using KWTH's services.
 It is so much more convenient than the current government setup with 
their quality 
							hunts. Know Where To Hunt is adding competence to the duck 
hunting experience in Skagit county. I hope KWTH remains an option for 
as long as I'm 
							hunting in WA!
						</blockquote>

						<hr/>

						<h5>Jeff (Member)</h5>
						<blockquote>
							Know Where To Hunt is like Lyft/AirBnB/Uber sharing economy app 
for waterfowl hunting, except you get expertise in knowledgeable guides 
(when you choose), 
							scouting reports and partnering with other local waterfowlers to 
learn more about our pursuit.
						</blockquote>

						<hr/>

						<h5>Bob (Member)</h5>
						<blockquote>
							Our group of five joined Know Where To Hunt this year, set up 3 
guided hunts to gain an insight into hunting snow geese, and found our 
assigned guide 
							very professional and helpful. Our group has hunted farm fields 
that normally would not be accessible to us. In this day and age, many 
hunting opportunities 
							have been taken from ordinary hunters, like our group, who lack 
the financial resources to lease farm land on our own. Know Where To 
Hunt has provided 
							that opportunity for us, and the staff have been very helpful, 
ensuring we have the knowledge and help we require to have good hunting 
experiences.<br/><br/>
		One of our group is physically handicapped, and on each hunt he 
has been on, the staff has provided assistance to get him to and from 
assigned blind sites. 
							They have been very ethical in all respects, respecting the land 
we hunt on, and it has been a pleasure to be associated with the group. I
 am looking forward 
							to future scheduled hunts, and the privilege of hunting on fields
 leased by Know Where To Hunt.<br/><br/>
		Well worth the money spent by our group
						</blockquote>

						<hr/>

						<h5>John (Member)</h5>
						<blockquote>
							This is my second year as a member of KWTH. It has been a real 
game-changer for my son and I as far as having a great experience and 
being able to 
							DIY on private land. We were going to Eastern WA only once a 
year. Now we get the chance to hunt much more.<br/><br/>
		It's great being able to book a hunt and not have to book months in advance.<br/>
		It's great having the field all to ourselves if we choose.<br/>
		It’s also great having different fields to choose from.<br/><br/>
		Keep up the good work. 
						</blockquote>

						<hr/>

						<h5>Scot (Member)</h5>
						<blockquote>
							 I joined KWTH in the last month and the reasons I joined are...<br/><br/>
			<ul>
									<li>the customer service that owners provide,</li>
									<li>the fantastic quality of the fields,</li>
									<li>and quantity of fields that are offered to KWTH members at an affordable price</li>
								 </ul>

						</blockquote>

						<hr/>

						<h5>Doug (Member)</h5>
						<blockquote>
							KWTH is in a className by itself and offers 5-star Customer Service 
and selection of fields at an economical price for any waterfowl hunter 
or enthusiast.<br/><br/>
		Thanks Guys... You run a First className Operation! 
						</blockquote>

						<hr/>

						<h5>Wade (Member)</h5>
						<blockquote>
							I want to thank you, Know Where To Hunt and the landowners who 
allow us to hunt on their property. The process to get signed up has 
been very easy, 
							I really appreciate the tips/information provided on the website,
 and the hunts have been great - lots of ducks and excitement.<br/><br/>
		However, what I am most grateful for is the opportunity to 
introduce my 11-yr old son to duck hunting. There are so many life 
lessons he is learning along 
							the way including personal responsibility, as well as respect for
 the land, wildlife, other hunters and the landowners. I know that as my
 son gets older that 
							he will not remember his best day of watching TV, but he will 
certainly remember the times he went hunting with his dad and when he 
shot his first greenhead. 
							These are memories we will hold for a lifetime.<br/><br/>
		Thank you to everyone involved in Know Where To Hunt for 
providing us an opportunity for great hunting at a reasonable price. We 
really appreciate all you do.
						</blockquote>

						<hr/>

						<h5>Terry (Member)</h5>
						<blockquote>
							Last year was my first year being a member. My son and I went on 
guided Snow goose and duck hunts. I must say the scouting done by KWTH 
staff is excellent. 
							The hunting was excellent. Since we're hunting over land, it made
 picking up our birds easy. I've been looking for a hunt club like this 
and I am impressed. 
						</blockquote>

						<hr/>

						<h5>John (Member)</h5>
						<blockquote>
							First off as I’d like to thank you guys for having this club.<br/><br/>
		I’m from Ollalla, Washington where I raise and train chocolate 
pointing labradors retrievers. I was looking for a place to train my 
dogs on snow geese and I 
							happened to meet game warden Officer Lucci who told me about Know
 Where To Hunt. I immediately contacted Dave McCormick and after talking
 with him I 
							signed right up. Dave offered some good advice and a place to 
check out - their Pioneer highway field.<br/><br/>
		I went there the following morning, stepped out of my truck, 
loaded my 28-gauge and got ready to go to the blind. Suddenly, right 
over my head flew 
							4 snow geese and before even walking 100 yards I had two snows on
 the ground.<br/><br/>
		Thanks guys for negotiating all the land for us, otherwise we’d 
all be locked-out. I just want to say thank you very much and I’m proud 
to be a member.
						</blockquote>

						<hr/>

						<h5>Craig (Member)</h5>
						<blockquote>
							KWTH’s guided hunts have been a great resource for someone like 
me who doesn’t have the ability to store the hundreds of decoys needed 
for 
							a successful hunt.<br/><br/>
		Our guide Rick was a pleasure to hunt with and went out of his 
way to ensure my son's first snow goose hunt was an enjoyable one.
						</blockquote>

						<hr/>

						<h5>Felipe (Member)</h5>
						<blockquote>
							Hunting public land in Washington state has become a joke. Let's 
say you and your friends get up very early to get the best spot and 
spend a couple of 
							hours setting up - only to see someone else setting up without 
decoys down-wind from you. KWTH allows us to still do what we love 
without having to 
							deal with the less entrepreneur.<br/><br/>
		Thank you guys for giving us this opportunity.
						</blockquote>

						<hr/>

						<h5>Troy (Member)</h5>
						<blockquote>
							First className organization! They go the extra mile to put you on 
birds. Like the flexibility of their model and options concerning guided
 and personal hunts.
						</blockquote>

						<hr/>

						<h5>Jef (Member)</h5>
						<blockquote>
							Know Where To Hunt has provided me access to prime waterfowl 
hunting grounds I would not have. I no longer have to combat hunt like I
 used to at 
							public lands. Having access to great fields has enabled me to 
hunt more, have great hunts with more experienced hunters, and 
contribute to keeping 
							the birds moving so local winter crops aren’t completely cleaned 
out.<br/><br/>
		I started out hunting by myself but in the two years I’ve been a 
member I’ve walked away with several friends and hunting partners, not 
to mention 
							the valuable experience and growth as a hunter and 
conservationist.<br/><br/>
		If you have been on the fence about joining, hop on down. Join. 
Book a field and work with Dave to get some members out there with you. 
Welcome to the club!
						</blockquote>

						<hr/>

						<h5>Brad (Member)</h5>
						<blockquote>
							KWTH is a quality, well-run organization. The owners are 
knowledgeable, professional, and committed both to the success of KWTH 
members and the 
							economic interests of landowners in the Skagit Valley.<br/><br/>
		KWTH provides a valuable resource where everyone wins. The 
benefits are far-reaching, and we look forward to building more 
landowner partnerships in the years ahead.
						</blockquote>

						<hr/>

						<h5>Ward (Farmer)</h5>
						<blockquote>
							KWTH went beyond my expectation of protecting our crops. Even 
though our property brought them little money, they were relentless 
against the tough, 
							never-weakening competitors (Snow Geese and Wigeon). We 
appreciate the help and constant communication. We look forward to 
working with KWTH in the future!
						</blockquote>

						<hr/>

						<h5>Steve (Farmer)</h5>
						<blockquote>
							As a landowner, and non-hunter, the benefit of planning, 
communication and protection of our fields through the entire season and
 beyond was a huge benefit to our 
							acreage. We really liked the relationship with KWTH and will 
continue to work with them in the future!
						</blockquote>

						<hr/>

						<h5>Darrin (Farmer)</h5>
						<blockquote>
							I was impressed with the attention to detail the Know Where To 
Hunt folks gave to this project. They answered all my concerns and 
really proved to me that 
							this system will work in the Skagit Valley.<br/><br/>
		KWTH folks really made it simple and easy for us to sign up for 
this service and they followed thru with all their promises.<br/><br/>
		My first concerns were how to accommodate the neighbor who has 
hunted on my land all his life. Not only did KWTH address this concern, 
but they made me a little extra money.
						</blockquote>

						<hr/>

						<h5>Maynard (Farmer)</h5>
						<blockquote>
							KWTH took care of everything and always knew exactly what was 
going on. I appreciated the hassle-free process and the payments were 
right on schedule.
						</blockquote>

						<hr/>

						<h5>Jason (Farmer)</h5>
						<blockquote>
							The Know Where To Hunt guys put hunters on my fields, had control
 over the hunts, and paid me on schedule at the end of each month. They 
were constantly patrolling 
							the valley and sending out scouting reports to let their members 
know where the ducks and geese were.<br/><br/>
		After season, they used several different tactics to keep the 
birds off my fields. These guys did their best and my crops survived the
 ducks and geese. I’ll continue 
							to work with them in the future.
						</blockquote>

					</div>

				</section>
                <ClosingStatement />
                <Footer />
            </div>
        );
    }
}

export default Testimonials;
