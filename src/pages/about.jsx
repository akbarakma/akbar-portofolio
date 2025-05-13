import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import Experience from "../components/projects/experience";

import "./styles/about.css";
import "../components/about/styles/socials.css"

const About = () => {

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle" style={{ color: 'black' }}>
									{INFO.about.description}
								</div>

								<div className="email" style={{ width: '50%' }}>
									<div className="email-wrapper">
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<div className="social-icon">
												<FontAwesomeIcon icon={faEnvelope} />
											</div>

											<div className="social-text" style={{ color: 'black' }}>{INFO.main.email}</div>
										</a>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials isNoEmail={true} />
								</div>
							</div>
						</div>
					</div>

					<div style={{ textAlign: 'center', color: 'black', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
							My Job Experience
					</div>

					<div className="all-projects-container">
						{
							INFO.jobExperience.map((project, index) => (
								<div className="all-projects-project" key={index}>
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
					<div style={{ textAlign: 'center', marginTop: '20px' }}>
						<Link to="/projects" style={{ color: 'orange', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
							See The Projects I've Made So Far ...
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
