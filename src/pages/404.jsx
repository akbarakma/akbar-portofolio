import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-container">
						<div className="notfound-message">
							<span className="notfound-eyebrow">Error · 404</span>
							<h1 className="notfound-title">
								Dead <em>end</em>.
							</h1>
							<div className="not-found-message">
								The page at <span className="url-box">{window.location.pathname}</span> doesn't exist — probably never did. Sorry about that.
							</div>
							<a href="/" className="not-found-link">
								<span>Back to <em>home</em></span>
								<span className="arrow">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
