import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';

const Properties = () => {
    return (
        <section className="wrapper style2">
            <div className="inner">
                <div id="property" className="toTopContainer">
                <img src={require('../assets/up.png')} className="toTop"/>
                </div>
                <header>
                    <h2 className="tac"><u>Properties</u></h2>
                    <p className="tac">Some of the best properties in the area!</p>
                    
                </header>
            </div>
        </section>
)};

export default Properties;