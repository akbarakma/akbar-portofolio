import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const items = [
	["home", "/", "Home"],
	["about", "/about", "Profile"],
	["projects", "/projects", "Work"],
	["contact", "/contact", "Contact"],
];

const publicSites = [
	{
		label: "MD View",
		url: "https://md.akbarakma.com",
	},
	{
		label: "Playground",
		url: "https://playground.akbarakma.com",
	},
	{
		label: "Promptloom",
		url: "https://prompt.akbarakma.com",
	},
	{
		label: "Short",
		url: "https://short.akbarakma.com",
	},
];

const NavBar = ({ active }) => {
	return (
		<aside className="site-rail">
			<div className="rail-brand">
				<Link to="/" className="rail-mark" aria-label="Akbar Danial Akma — home">
					<img src="/logo.png" alt="" />
				</Link>
				<div className="rail-identity">
					<strong>Akbar Akma</strong>
					<span>Senior Software Engineer</span>
				</div>
			</div>

			<nav className="rail-primary-nav" aria-label="Primary navigation">
				<ol className="rail-nav">
					{items.map(([key, path, label], index) => (
						<li key={key} className={active === key ? "active" : ""}>
							<Link to={path} aria-current={active === key ? "page" : undefined}>
								<span className="rail-number">{String(index + 1).padStart(2, "0")}</span>
								<span>{label}</span>
							</Link>
						</li>
					))}
				</ol>
			</nav>

			<nav className="rail-bottom" aria-labelledby="public-websites-label">
				<span id="public-websites-label" className="rail-section-label">Public websites</span>
				{publicSites.map((site) => (
					<a
						key={site.url}
						className="rail-public-site"
						href={site.url}
						target="_blank"
						rel="noreferrer"
					>
						<span>{site.label}</span>
						<span aria-hidden="true">↗</span>
					</a>
				))}
			</nav>
		</aside>
	);
};

export default NavBar;
