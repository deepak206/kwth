import React, {Fragment, Component} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';
import {connect} from 'react-redux';
import {ToggelMenu} from '../actions/menu-action';

class Footer extends Component {
	getRoute = (route) => {
		document.body.classList.toggle('is-menu-visible');
		history.push(route);
	}

	menuToggel  = (event) => {
		event.preventDefault();
		document.body.classList.toggle('is-menu-visible');
		this.props.ToggelMenu({menuState: !this.props.menuState});
	}
	render() {
		return (
			<Fragment>
				<footer id="footer">
					<ul className="icons">
					<li><a href="https://www.facebook.com/knowwheretohunt/" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
						<li><a href="https://www.twitter.com/knowwheretohunt/" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
						<li><a href="https://www.instagram.com/knowwheretohunt/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
						<li><a href="https://www.youtube.com/channel/UCMZydrS7HrJicevSxq2kYgw" className="icon fa-youtube" target="_blank"><span className="label">YouTube</span></a></li>
						<li><a href="https://www.knowwheretohunt.com/about/#contact" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
					</ul>
					<ul className="copyright">
						<li>© Know Where To Hunt</li><li><a href="" onClick={() => this.getRoute('/')}>KWTH</a></li>
					</ul>
				</footer>
				{this.props.menuState && <div id="menu">
					<ul>
						<li>
							<a href="" onClick={() => this.getRoute('/')}>Home</a>
						</li>
						<li>
							<a href="" onClick={() => this.getRoute('/hunting')}>Hunting</a>
						</li>
						<li>
							<a href="" onClick={() => this.getRoute('/about')}>About</a>
						</li>
						<li>
							<a href="" onClick={() => this.getRoute('/login')}>Log In</a>
						</li>
					</ul>
				<a className="close" onClick={(event) => this.menuToggel(event)}></a>
				</div>
				}
		</Fragment>
	)}
}
const mapStateToProps = ({menuToggel: {menuState}}) => ({
	menuState,
  });
  
export default connect(
mapStateToProps,
{ToggelMenu}
)(Footer);