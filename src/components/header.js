import React, {Component} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';
import {connect} from 'react-redux';
import {ToggelMenu} from '../actions/menu-action';

class Header extends Component {

    getRoute = (route) => {
        history.push(route);
    }
    
    menuToggel  = (event) => {
		event.preventDefault();
		document.body.classList.toggle('is-menu-visible');
		this.props.ToggelMenu({menuState: !this.props.menuState});
	}

    render() {
    return (
        <header id="header">
            <h1><a href="" onClick={() => this.getRoute('/')}>
                <img src={require('../assets/logo-sml.png')} className="logo" />
                </a>
            </h1>            
            <nav id="nav">
			<ul>
				<li className="special">
					<a href="" className="menuToggle" onClick={(event) => this.menuToggel(event)}><span>Menu</span></a>
					
				</li>
			</ul>
		</nav>
        </header>
    )}
};

const mapStateToProps = ({menuToggel: {menuState}}) => ({
	menuState,
  });
  
export default connect(
mapStateToProps,
{ToggelMenu}
)(Header);