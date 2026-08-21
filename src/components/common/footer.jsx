import React from "react";
import INFO from "../../data/user";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<span className="mono footer-note">© {year} Akbar Danial Akma</span>
				<nav className="footer-links" aria-label="Elsewhere">
					<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="footer-link mono">
						github
					</a>
					<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="footer-link mono">
						linkedin
					</a>
					<a href={`mailto:${INFO.main.email}`} className="footer-link mono">
						email
					</a>
					<a href={INFO.socials.cv} target="_blank" rel="noreferrer" className="footer-link mono">
						resume
					</a>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
