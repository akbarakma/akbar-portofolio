import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Experience from "../components/projects/experience";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const currentSEO = SEO.find((item) => item.page === "about");

const principles = [
	{
		number: "01",
		title: "Own the work.",
		body: "I like seeing a feature through from the data and API to the screen and deployment.",
	},
	{
		number: "02",
		title: "Keep it simple.",
		body: "I do not add complexity until it has a clear reason to be there. Simple code is easier to run, fix, and hand over.",
	},
	{
		number: "03",
		title: "Keep learning.",
		body: "I am always trying new tools and ideas. Right now, I spend a lot of that time on Python, LLMs, and AI agents.",
	},
];

const stack = [
	"TypeScript",
	"Go",
	"Python",
	"Node.js",
	"React",
	"PostgreSQL",
	"Kafka",
	"AWS",
	"GCP",
	"React Native",
	"LLM agents",
];

const About = () => (
	<>
		<Helmet>
			<title>{`About | ${INFO.main.title}`}</title>
			<meta name="description" content={currentSEO.description} />
			<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			<link rel="canonical" href="https://akbarakma.com/about" />
			<meta property="og:title" content={`About | ${INFO.main.title}`} />
			<meta property="og:description" content={currentSEO.description} />
			<meta property="og:url" content="https://akbarakma.com/about" />
			<meta property="og:type" content="profile" />
			<meta property="og:image" content="https://akbarakma.com/about.jpg" />
			<script type="application/ld+json">{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfilePage",
				mainEntity: {
					"@type": "Person",
					name: INFO.main.name,
					alternateName: "Akbar Akma",
					url: "https://akbarakma.com/about",
					image: "https://akbarakma.com/about.jpg",
					jobTitle: "Senior Software Engineer",
					description: INFO.about.description,
					email: `mailto:${INFO.main.email}`,
					sameAs: [INFO.socials.github, INFO.socials.linkedin],
				},
			})}</script>
		</Helmet>

		<div className="page-content">
			<NavBar active="about" />
			<main className="content-wrapper">
				<section className="about-hero stagger">
					<div className="about-title-block">
						<span className="eyebrow">About me</span>
						<h1>A little about me.</h1>
					</div>

					<div className="about-portrait-card">
						<img src="/about.jpg" alt="Akbar Danial Akma" />
						<span>Akbar Danial Akma</span>
					</div>

					<div className="about-introduction">
						<p className="about-opening">
							I’m a Senior Software Engineer who works across backend and frontend.
						</p>
						<p>{INFO.about.description}</p>
						<div className="about-links">
							<a className="button-link" href={INFO.socials.cv} target="_blank" rel="noreferrer">
								Read my résumé <span aria-hidden="true">↗</span>
							</a>
							<a className="text-link" href={`mailto:${INFO.main.email}`}>
								{INFO.main.email} <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</section>

				<section className="principles-section">
					<header>
						<span className="eyebrow">What matters to me</span>
						<h2>How I like to work.</h2>
					</header>
					<div className="principles-grid">
						{principles.map((principle) => (
							<article key={principle.number}>
								<span>{principle.number}</span>
								<h3>{principle.title}</h3>
								<p>{principle.body}</p>
							</article>
						))}
					</div>
				</section>

				<section className="career-section">
					<header className="career-heading">
						<div>
							<span className="eyebrow">Experience / 2019—now</span>
							<h2>Where I’ve worked.</h2>
						</div>
						<p>Small teams, large systems, and work spanning Jakarta, Singapore, and London.</p>
					</header>
					<div className="experience-list">
						{INFO.jobExperience.map((experience, index) => (
							<Experience key={experience.title} {...experience} index={index + 1} />
						))}
					</div>
				</section>

				<section className="stack-section">
					<div className="stack-copy">
						<span className="eyebrow">Languages and tools</span>
						<h2>The tools I use most.</h2>
						<p>
							I pick the tool that fits the job. These are the ones I have used most in
							real projects.
						</p>
					</div>
					<ul>
						{stack.map((item, index) => (
							<li key={item} className={index % 3 === 1 ? "stack-accent" : ""}>
								{item}
							</li>
						))}
					</ul>
				</section>

				<section className="about-next">
					<span>That’s the short version.</span>
					<Link to="/projects">
						See my projects. <span aria-hidden="true">→</span>
					</Link>
				</section>

				<div className="page-footer">
					<Footer />
				</div>
			</main>
		</div>
	</>
);

export default About;
