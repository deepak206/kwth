import React, {Fragment} from 'react';
import history from '../history';

const getRoute = (route) => {
    history.push(route);
}

const HuntingSection = () => {
    return (
        <Fragment>
            <section id="banner2"></section>
            <section id="buttons" className="wrapper palette01">
					<div className="inner">
						<header>
							<h2 className="tac"><u>Hunting</u></h2>
							<div className="spacer20"></div>
						</header>
						<div id="menu-buttons">

								<a href="" onClick={() => getRoute('/reserve-field')} className="button palette01">Reserve a Field</a><br/>

							<a href="" onClick={() => getRoute('/scouting-reports')} className="button palette03">Scouting Reports</a><br/>
							<a href="" onClick={() => getRoute('/reqs-and-regs')} className="button palette01">Reqs &amp; Regs</a><br/>
						</div>
					</div>
				</section>

				<section>
					<div className="spacer100"></div>
					<div className="spacer100"></div>
				</section>
        </Fragment>
)};

export default HuntingSection;