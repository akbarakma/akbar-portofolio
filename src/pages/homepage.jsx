import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faFileLines } from "@fortawesome/free-regular-svg-icons/faFileLines";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import CurrentlyLine from "../components/common/currentlyLine";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import { Link } from "react-router-dom";

const currentSEO = SEO.find((item) => item.page === "home");
const seoKeywords = currentSEO.keywords.join(", ");

const Homepage = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 600px)');

		const handleChange = (e) => setIsMobile(e.matches);

		setIsMobile(mediaQuery.matches);

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={seoKeywords} />
				<link rel="canonical" href="https://www.akbarakma.tech/" />
				<meta property="og:title" content={INFO.main.title} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content="https://www.akbarakma.tech/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.akbarakma.tech/homepage.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={INFO.main.title} />
				<meta name="twitter:description" content={currentSEO.description} />
				<meta name="twitter:image" content="https://www.akbarakma.tech/homepage.jpg" />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<section className="homepage-hero stagger">
						<div className="homepage-hero-left">
							<span className="homepage-eyebrow">Fullstack Engineer · 5+ yrs</span>
							<h1 className="homepage-display">
								Akbar <em>Danial</em> Akma.
							</h1>
							<CurrentlyLine items={INFO.homepage.currentlyItems} />
							<p className="homepage-lede">
								{INFO.homepage.description}
							</p>
						</div>
						<div className="homepage-hero-right">
							<div className="homepage-portrait">
								<img
									src="homepage.jpg"
									alt="Portrait of Akbar Danial Akma"
								/>
								<span className="homepage-portrait-tag">Jakarta · open to work</span>
							</div>
						</div>
					</section>

					<div className="homepage-socials">
						<span className="homepage-socials-label">Elsewhere</span>
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<FontAwesomeIcon
								icon={faLinkedinIn}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={INFO.socials.cv}
							target="_blank"
							rel="noreferrer"
							aria-label="Resume"
						>
							<FontAwesomeIcon
								icon={faFileLines}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
							aria-label="Email"
						>
							<FontAwesomeIcon
								icon={faMailBulk}
								className="homepage-social-icon"
							/>
						</a>
					</div>

					<div className="ai-lab-row">
						<section className="ai-lab" aria-label="AI lab — what I'm building with">
							<div className="ai-lab-meta">
								<span className="ai-lab-eyebrow">
									AI Lab
								</span>
								<h2 className="ai-lab-title">
									Pulled into <em>AI agents</em>.
								</h2>
								<p className="ai-lab-body">
									Outside of work, most of my time goes here — wrangling coding agents,
									running open-source models locally, and learning how each LLM breaks
									differently.
								</p>
							</div>
							<div className="ai-lab-tracks">
								<div className="ai-lab-track">
									<span className="ai-lab-track-label">Agents</span>
									<ul className="ai-lab-track-list">
										<li>Claude</li>
										<li>Codex</li>
									</ul>
								</div>
								<div className="ai-lab-track">
									<span className="ai-lab-track-label">Local · OSS</span>
									<ul className="ai-lab-track-list">
										<li>ollama</li>
										<li>gpt-oss</li>
										<li>deepseek</li>
										<li>gemini</li>
									</ul>
								</div>
							</div>
						</section>

						<a
							className="playground-card"
							href="https://playground.akbarakma.tech"
							target="_blank"
							rel="noreferrer"
							aria-label="Visit my playground — a collection of solo projects shipped from the AI lab"
						>
							<span className="playground-eyebrow">
								<span className="playground-dot" aria-hidden="true" />
								Shipped from the lab
							</span>
							<h3 className="playground-title">
								My <em>playground</em>.
							</h3>
							<p className="playground-body">
								A live hub for the solo things I build for fun — games, experiments,
								and whatever the lab spits out next. Poke around, everything's deployed.
							</p>
							<div className="playground-meta">
								<span className="playground-tag">Solo · for fun</span>
								<span className="playground-tag">Live</span>
							</div>
							<span className="playground-cta">
								<span>Explore it →</span>
								<span className="playground-url">playground.akbarakma.tech</span>
							</span>
						</a>
					</div>

					<div className="homepage-section-label">
						<h2>Project <em>highlights</em></h2>
						<span className="mono-count">selected work</span>
					</div>

					<div className="homepage-projects">
						<AllProjects isFromHomepage={true} isMobile={isMobile} />
					</div>

					<div className="homepage-cta-row">
						<Link to="/about" className="homepage-cta-link">
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

export default Homepage;
