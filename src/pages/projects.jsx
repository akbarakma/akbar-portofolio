import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import { Link } from "react-router-dom";

import "./styles/projects.css";

const currentSEO = SEO.find((item) => item.page === "projects");
const seoKeywords = currentSEO.keywords.join(", ");

const Projects = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={seoKeywords} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<section className="projects-hero stagger">
						<div>
							<span className="projects-eyebrow">Projects · {INFO.projects.length} entries</span>
							<h1 className="projects-display">
								Things I've <em>made</em> so far.
							</h1>
						</div>
						<div>
							<p className="projects-lede">
								Some of these were built solo from a blank repo; others came together with teams across Jakarta, Singapore, and London. Each one taught me something I couldn't have learned in isolation — about scale, about trade-offs, about what "done" actually means.
							</p>
							<div className="projects-cta-row">
								<Link to="/contact" className="projects-cta-link">
									Want to work together? → say hi
								</Link>
							</div>
						</div>
					</section>

					<div className="projects-meta-strip">
						<div className="projects-meta-block">
							<span className="projects-meta-label">Companies</span>
							<span className="projects-meta-value">
								{Array.from(new Set(INFO.projects.map((p) => p.company).filter(Boolean))).join(" · ")}
							</span>
						</div>
						<div className="projects-meta-block">
							<span className="projects-meta-label">Cities</span>
							<span className="projects-meta-value">Jakarta · Singapore · London</span>
						</div>
						<div className="projects-meta-block">
							<span className="projects-meta-label">Span</span>
							<span className="projects-meta-value">2019 — Now</span>
						</div>
					</div>

					<div className="projects-list">
						<AllProjects />
					</div>

					<div className="projects-bottom-cta">
						<Link to="/about">
							<span>More <em>about me</em> &amp; where I've worked</span>
							<span className="arrow">→</span>
						</Link>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
