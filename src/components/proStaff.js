import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const ProStaff = () => {
    
    return (
        <section className="wrapper">
            <div className="inner">
                <div id="prostaff" className="toTopContainer">
                    <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
                </div>
                <header>
                    <h2 className="tac"><u>Pro Staff</u></h2>
                    <div className="spacer20"></div>
                </header>

                <section>
                    <h3>Rick Gardner</h3>
                    <p>
                        Born and raised right here in the Skagit valley area, Rick knows
a lot of the farmers. Rick grew up hunting with his Dad and uncle and 
shot his first deer at age 11. 
                        He picked up archery hunting at age 21 and has shot many deer, 
pheasant, turkey, and raccoon since then.<br/><br/>

                        Rick really got serious into hunting waterfowl in 1996 when 
living in Idaho and he brought that passion back to Washington when he 
moved back home a few years later. 
                        He says he loves the challenge of calling and decoying snow 
geese and ducks. He has a wide variety of decoys and is constantly 
searching forums and blogs for the next 
                        new thing to try.<br/><br/>

                        Rick spends many late nights in his garage hand-turning duck and
goose calls on his lathe. He lives and breathe waterfowl hunting and 
says living in the La Conner area 
                        gives him a great advantage to scouting the fields and water 
holes for birds. Rick has spent many years photographing wildlife, which
he says is a great way to learn their habits. 
                    </p>
                </section>

            </div>
        </section>
)};

export default ProStaff;