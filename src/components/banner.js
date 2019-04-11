import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const Banner = () => {
    return (
        <section id="banner">
            <div className="inner">
                <img src={require('../assets/logo.png')} className="logo" title="Know Where to Hunt" alt="Know Where to Hunt"/>
                <p><br />Connecting Responsible Hunters to Prime Hunting Land<br /></p>
                <ul className="actions">
                    <li><a href="URL/#one" className="button palette01 scrolly">Why KWTH?</a></li>
                </ul>
            </div>
            <a href="URL/#one" className="more scrolly">Learn More</a>
        </section>
)};

export default Banner;