import React from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "./themeToggle";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-left">
						<Link to="/" className="nav-wordmark" aria-label="Akbar Danial Akma — home">
							<img
								src="/logo.png"
								alt="Akbar Danial Akma logo"
								className="nav-wordmark-logo"
							/>
						</Link>
						<ThemeToggle />
					</div>
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							{/* <li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li> */}
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li className="nav-item nav-playground">
								<a
									href="https://playground.akbarakma.tech"
									target="_blank"
									rel="noreferrer"
									aria-label="Visit my playground — solo projects, live"
								>
									<span className="nav-playground-dot" aria-hidden="true" />
									<span className="nav-playground-label">playground</span>
									<span className="nav-playground-arrow" aria-hidden="true">↗</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
