import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const Faqs = () => {
    return (
        <section className="wrapper style3">
            <div className="inner tac">
                <div id="faqs" className="toTopContainer">
                <img src={require('../assets/up.png')} className="toTop"/>
                </div>
                <header>
                    <h2 className="tac"><u>FAQs</u></h2>
                </header>

                <header>
                    <h4>Is there a discount for Youth members?</h4>
                    <p>
                        Youth are FREE until age 18 - always have been and always will 
be. They are the future of waterfowl hunting so we need to encourage 
them 
                        to hunt while they still have this privilege!<br/><br/>

                        You will need to contact Know Where to Hunt Support to have a Youth member added to the system.
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>How do you keep a member from locking-up a field for the entire season?</h4>
                    <p>
                        Each member can have up to two (2) hunts reserved at any given 
time (but not on the same day)! The website will not allow a member to 
reserve 
                        another field until one of the hunts has been completed!<br/><br/>

                        Something else to be aware of... If a member reserves a field 
but does not actually hunt it, that member will be issued a fine. Know 
Where to Hunt 
                        administrators will lock-out that member until the fine is paid 
in full.
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>Do all "Know Where to Hunt" fields have blinds?</h4>
                    <p>No, not all fields have blinds. There are a couple of fields without blinds.</p>
                </header>
                    <br/>
                <header>
                    <h4>If a field has a blind, do I have to hunt from the blind?</h4>
                    <p>
                        No, you can hunt from anywhere in the field unless the website 
states otherwise. You can use layout blinds if you want, or hunt from 
ditch lines, 
                        or even use the field's natural cover.<br/><br/> Go to the <a href="#property" className="scrolly">details</a> page for each property to learn more!
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>How many hunters can fit into a blind?</h4>
                    <p>
                        Go to the <a href="#property" className="scrolly">details</a> page for information on the maximum number of hunters allowed. We base the max 
                        number of hunters off of the size of the blind.
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>Do I have to share the field with other members?</h4>
                    <p>No. When you book a hunt, that field is all yours for the day.
You can invite other members to hunt with you OR hunt all by yourself.</p>
                </header>
                    <br/>
                <header>
                    <h4>How many people can I hunt with?</h4>
                    <p>
                        All of our properties have a Max Number of Hunters Allowed. You can visit the <a href="#property" className="scrolly">details</a> page of each 
                        property to see specifics about that field.
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>Can I invite my friends if they are not members?</h4>
                    <p>
                        Yes. Full-Season memberships come with one free guest pass that 
can be used to take a non-member out hunting on one of our properties. 
                        If you have already used that free membership, then non-members 
can join the hunt for a $125 fee.
                    </p>
                </header>
                    <br/>
                <header>
                    <h4>Can I bring guests if they are not shooting?</h4>
                    <p>Yes, but there are a couple caveats.<br/>
                    1. Any person that wishes to be on a KWTH property MUST be under 
our insurance policy. Therefore, everyone must accept to our Terms &amp;
Conditions 
                    before they can step foot on any of our properties.<br/>

                    Being on our properties without first accepting our Terms &amp; Conditions will be considered trespassing.<br/><br/>

                    2. The number of people in the blind (regardless if they are 
shooting or not) must NOT exceed the limit set for that field. See 
                    the <a href="#property" className="scrolly">details</a> page for more information.<br/><br/>

                    Contact Know Where to Hunt Support to make necessary arrangements.
                    </p>
                </header>
                    <br/>

            </div>
        </section>
)};

export default Faqs;