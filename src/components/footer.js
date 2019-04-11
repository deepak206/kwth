import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const Footer = () => {
    return (
    <footer id="footer">
		<ul className="icons">
			<li><a href="URL" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
			<li><a href="URL" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
			<li><a href="URL" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
			<li><a href="URL" className="icon fa-youtube" target="_blank"><span className="label">YouTube</span></a></li>
			<li><a href="URL" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
		</ul>
		<ul className="copyright">
			<li>© Know Where To Hunt</li><li><a href="URL">KWTH</a></li>
		</ul>
	</footer>
)};

export default Footer;