import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => (
	<>
		<Helmet>
			<title>{`404 | ${INFO.main.title}`}</title>
			<meta name="robots" content="noindex, follow" />
		</Helmet>
		<div className="page-content">
			<NavBar />
			<main className="content-wrapper notfound-main">
				<section className="notfound-card">
					<div className="notfound-code" aria-hidden="true">404</div>
					<div>
						<span className="eyebrow">Page not found</span>
						<h1>There’s nothing here.</h1>
						<p>
							The page <code>{window.location.pathname}</code> does not exist. You can
							head back home and keep looking around.
						</p>
						<Link className="button-link" to="/">
							Back to home <span aria-hidden="true">→</span>
						</Link>
					</div>
				</section>
				<div className="page-footer">
					<Footer />
				</div>
			</main>
		</div>
	</>
);

export default Notfound;
