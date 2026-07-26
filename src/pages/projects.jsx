import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SingleProject from "../components/projects/singleProject";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const currentSEO = SEO.find((item) => item.page === "projects");

const Projects = () => {
	const companies = new Set(INFO.projects.map((project) => project.company).filter(Boolean)).size;

	return (
		<>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
				<link rel="canonical" href="https://akbarakma.com/projects" />
				<meta property="og:title" content={`Projects | ${INFO.main.title}`} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content="https://akbarakma.com/projects" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://akbarakma.com/homepage.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<main className="content-wrapper">
					<section className="work-hero stagger">
						<div className="work-title">
							<span className="eyebrow">Selected projects</span>
							<h1>Things I’ve built.</h1>
						</div>
						<div className="work-intro">
							<p>
								I’ve worked on logistics, e-commerce, health, social, and mobile
								products. Some were built with a team and some from scratch. Here is
								what I worked on and the tools I used.
							</p>
							<Link className="button-link" to="/contact">
								Let’s talk <span aria-hidden="true">→</span>
							</Link>
						</div>
					</section>

					<section className="work-metrics" aria-label="Project archive summary">
						<div>
							<span>Projects</span>
							<strong>{String(INFO.projects.length).padStart(2, "0")}</strong>
						</div>
						<div>
							<span>Companies</span>
							<strong>{String(companies).padStart(2, "0")}</strong>
						</div>
						<div>
							<span>Countries</span>
							<strong>03</strong>
						</div>
						<p>Jakarta · Singapore · London</p>
					</section>

					<section className="project-archive">
						<header>
							<div>
								<span className="eyebrow">All projects</span>
								<h2>More of my work.</h2>
							</div>
							<p>
								Some projects have a public link. Others were private client work, so
								I’ve shared what I built without exposing their code.
							</p>
						</header>

						<div className="project-grid">
							{INFO.projects.map((project, index) => (
								<SingleProject
									key={project.title}
									{...project}
									index={index + 1}
									featured={index === 0}
								/>
							))}
						</div>
					</section>

					<section className="work-footer-cta">
						<span>Have a project in mind?</span>
						<Link to="/contact">
							Let’s talk. <span aria-hidden="true">→</span>
						</Link>
					</section>

					<div className="page-footer">
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
};

export default Projects;
