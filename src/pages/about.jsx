import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import Experience from "../components/projects/experience";

import "./styles/about.css";
import "../components/about/styles/socials.css";

const currentSEO = SEO.find((item) => item.page === "about");
const seoKeywords = currentSEO.keywords.join(", ");

const About = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={seoKeywords} />
				<link rel="canonical" href="https://www.akbarakma.tech/about" />
				<meta property="og:title" content={`About | ${INFO.main.title}`} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content="https://www.akbarakma.tech/about" />
				<meta property="og:type" content="profile" />
				<meta property="og:image" content="https://www.akbarakma.tech/about.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={`About | ${INFO.main.title}`} />
				<meta name="twitter:description" content={currentSEO.description} />
				<meta name="twitter:image" content="https://www.akbarakma.tech/about.jpg" />
				<script type="application/ld+json">{`
					{
						"@context": "https://schema.org",
						"@type": "ProfilePage",
						"mainEntity": {
							"@type": "Person",
							"name": "Akbar Danial Akma",
							"alternateName": "Akbar Akma",
							"url": "https://www.akbarakma.tech/about",
							"image": "https://www.akbarakma.tech/about.jpg",
							"jobTitle": "Fullstack Engineer",
							"description": "${INFO.about.description.replace(/"/g, '\\"')}",
							"sameAs": [
								"https://github.com/akbarakma",
								"https://www.linkedin.com/in/akbarakma"
							]
						}
					}
				`}</script>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<section className="about-hero stagger">
						<div>
							<span className="about-eyebrow">About · the short version</span>
							<h1 className="about-display">
								Quick <em>hello</em>, then the work.
							</h1>
							<p className="about-body">{INFO.about.description}</p>

							<div className="about-email">
								<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>{INFO.main.email}</span>
								</a>
							</div>
						</div>

						<div>
							<div className="about-portrait">
								<img src="about.jpg" alt="Portrait of Akbar Danial Akma" />
							</div>
							<div className="about-socials">
								<Socials isNoEmail={true} />
							</div>
						</div>
					</section>

					<div className="about-section-header">
						<h2>Where I've <em>worked</em></h2>
						<span className="mono-count">{INFO.jobExperience.length} roles</span>
					</div>

					<div className="experience-list">
						{
							INFO.jobExperience.map((project, index) => (
								<div className="experience-item" key={index}>
									<Experience
										logo={project.logo}
										title={project.title}
										description={project.description}
										linkText={project.linkText}
										link={project.link}
										years={project.years}
										role={project.role}
									/>
								</div>
							))
						}
					</div>

					<div className="about-cta-row">
						<Link to="/projects" className="about-cta-link">
							<span>See the <em>projects</em> I've shipped</span>
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

export default About;
