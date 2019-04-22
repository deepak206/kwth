import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const SnowGeeseAndDucks = () => {
    return (
        <section className="wrapper alt style5">
        <section className="spotlight">
            <div className="image">
                <img src={require('../assets/snows.jpg')} alt="Snow Geese" />
            </div>
            <div className="content">
                <h2>Snow Geese from Wrangel Island!</h2>
                <p>The majority of the snow geese that winter in Skagit County come from Wrangel Island, Russia.</p>
                <p>Our Fir Island fields are known for holding thousands of snow geese every year!</p>
                <p>Hunt on your own or join a Guided Hunt with one of our Pro Staff guides!</p>
            </div>
        </section>

        <section className="spotlight">
            <div className="image">
                <img src={require('../assets/ducks.jpg')} alt="" />
            </div>
            <div className="content">
                <h2>Ducks, ducks and more ducks!</h2>
                <p>Skagit County is the final stop for thousands of Northern mallards, pintail and wigeon.</p>
                <p>Most every KWTH field has a ditch or body of water on it or surrounding it!</p>
                <p>Hunt on your own or join a Guided Hunt with one of our Pro Staff guides!</p>
            </div>
        </section>
    </section>
)};

export default SnowGeeseAndDucks;