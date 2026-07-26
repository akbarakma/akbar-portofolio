import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<p>
				<span className="footer-signal" aria-hidden="true" />
				Built by Akbar in Jakarta.
			</p>
			<nav aria-label="Footer navigation">
				<Link to="/about">Profile</Link>
				<Link to="/projects">Work</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<p className="footer-copyright">© {new Date().getFullYear()} Akbar Danial Akma</p>
		</footer>
	);
};

export default Footer;
