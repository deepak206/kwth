import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';

const getRoute = (route) => {
    history.push(route);
}

const Footer = () => {
    return (
    <footer id="footer">
		<ul className="icons">
		<li><a href="https://www.facebook.com/knowwheretohunt/" class="icon fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>
			<li><a href="https://www.twitter.com/knowwheretohunt/" class="icon fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
			<li><a href="https://www.instagram.com/knowwheretohunt/" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
			<li><a href="https://www.youtube.com/channel/UCMZydrS7HrJicevSxq2kYgw" class="icon fa-youtube" target="_blank"><span class="label">YouTube</span></a></li>
			<li><a href="https://www.knowwheretohunt.com/about/#contact" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
		</ul>
		<ul className="copyright">
			<li>© Know Where To Hunt</li><li><a href="" onClick={() => getRoute('/')}>KWTH</a></li>
		</ul>
	</footer>
)};

export default Footer;