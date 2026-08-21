import React from "react";
import { Link } from "react-router-dom";

import Seo from "../components/common/seo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const Notfound = () => (
	<div className="site-shell">
		<Seo
			title="Page not found | Akbar Danial Akma"
			description="That page does not exist. Head back to the homepage or browse the projects."
			path="/404"
		/>
		<NavBar />
		<main className="site-main notfound-main">
			<p className="notfound-code mono" aria-hidden="true">
				404
			</p>
			<h1 className="page-title">Nothing lives here.</h1>
			<p className="page-lede">
				<code>{window.location.pathname}</code> is not a page I ever built. Either I moved
				it, or you found a typo. Both are on me.
			</p>
			<div className="notfound-actions">
				<Link to="/" className="btn btn-solid">
					Back home
				</Link>
				<Link to="/projects" className="btn btn-ghost">
					See the projects
				</Link>
			</div>
		</main>
		<Footer />
	</div>
);

export default Notfound;
