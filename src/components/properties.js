import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import '../style/css.css';
import MapContainer from '../components/mapContainer';

const Properties = () => {
    var styles = {
        position: 'relative',
        overflow: 'hidden',
    }
    return (
        <section className="wrapper style2">
            <div className="inner">
                <div id="property" className="toTopContainer">
                <img src={require('../assets/up.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
                </div>
                <header>
                    <h2 className="tac"><u>Properties</u></h2>
                    <p className="tac">Some of the best properties in the area!</p>
                    <div id="map" style={styles}>
                        <MapContainer />
                    </div>
                </header>
            </div>
        </section>
)};

export default Properties;