import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const Testimonials = () => {
    return (
        <section className="wrapper style7">
            <div className="inner">
                <div id="testimonials" className="toTopContainer">
                    <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
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

                <h5>Ward (Farmer)</h5>
                <blockquote>
                    KWTH went beyond my expectation of protecting our crops after 
duck hunting season. They were relentless against the tough, 
never-weakening 
                    competitors (Snow Geese and Wigeon).  We appreciate the help and 
constant communication. We look forward to working with KWTH in the 
future!
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
but they made me 
                    some extra money.
                </blockquote>

                <hr/>

                <h5>Jason (Member)</h5>
                <blockquote>
                    I just wanted to say thanks again for taking us out the other 
day. We all had an absolute blast and can't wait to get after it again -
hopefully real soon!
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

            </div>
            <div className="12u">
                <div className="spacer50"></div>
                <ul className="actions tac">
                    <li><a href="/testimonials" className="button big">View All</a></li>
                </ul>
                <div className="spacer30"></div>
            </div>
        </section>
)};

export default Testimonials;