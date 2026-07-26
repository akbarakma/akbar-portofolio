import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const currentSEO = SEO.find((item) => item.page === "home");

const proof = [
	["5+", "years building"],
	["3", "countries"],
	["1M+", "campaign-day requests"],
	["Full", "stack ownership"],
];

const Homepage = () => {
	const highlights = INFO.homepageProjects.slice(0, 3);

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
				<link rel="canonical" href="https://akbarakma.com/" />
				<meta property="og:title" content={INFO.main.title} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content="https://akbarakma.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://akbarakma.com/homepage.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<main className="content-wrapper">
					<section className="home-hero">
						<div className="home-intro stagger">
							<div className="home-kicker">
								<span className="eyebrow">Senior Software Engineer</span>
								<span className="home-availability">Open to new opportunities</span>
							</div>

							<h1>
								<span className="home-name">Akbar Danial Akma</span>
								<span className="home-headline-line">I build the</span>
								<span className="home-headline-line">systems people</span>
								<em className="home-headline-line home-headline-accent">count on.</em>
							</h1>

							<div className="home-intro-bottom">
								<p>
									I’ve spent 5+ years building backend services, web apps, and mobile
									products. I work across the stack and like owning a feature from the
									first API call to the final screen.
								</p>
								<div className="home-actions">
									<Link to="/projects" className="button-link">
										See my work <span aria-hidden="true">↗</span>
									</Link>
									<a className="text-link" href={`mailto:${INFO.main.email}`}>
										Email me <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>

          <div className="home-portrait-wrap">
							<div className="home-portrait">
								<img src="/homepage.jpg" alt="Akbar Danial Akma" />
							</div>
						</div>
					</section>

					<section className="proof-strip" aria-label="Career highlights">
						{proof.map(([value, label]) => (
							<div key={label}>
								<strong>{value}</strong>
								<span>{label}</span>
							</div>
						))}
					</section>

					<section className="selected-work">
						<header className="section-intro">
							<div>
								<span className="eyebrow">Selected projects</span>
								<h2>A few things I’ve built.</h2>
							</div>
							<Link to="/projects" className="text-link">
								All projects <span aria-hidden="true">→</span>
							</Link>
						</header>

						<div className="home-project-list">
							{highlights.map((project, index) => {
								const titleParts = project.title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
								const title = titleParts ? titleParts[1] : project.title;
								const location = titleParts ? titleParts[2] : "International";
								const Wrapper = project.link ? "a" : "article";
								const wrapperProps = project.link
									? { href: project.link, target: "_blank", rel: "noreferrer" }
									: {};

								return (
									<Wrapper className="home-project" key={project.title} {...wrapperProps}>
										<span className="home-project-index">{String(index + 1).padStart(2, "0")}</span>
										<div>
											<span className="home-project-location">{location}</span>
											<h3>{title}</h3>
										</div>
										<p>{project.description}</p>
										<span className="home-project-arrow" aria-hidden="true">
											{project.link ? "↗" : "—"}
										</span>
									</Wrapper>
								);
							})}
						</div>
					</section>

					<section className="public-sites" id="public-sites">
						<header className="section-intro">
							<div>
								<span className="eyebrow">Built and running</span>
								<h2>My public websites.</h2>
							</div>
							<p>
								These are personal tools and small projects that I built, host, and
								still use.
							</p>
						</header>
						<div className="public-site-list">
							{INFO.publicSites.map((site, index) => (
								<a key={site.url} href={site.url} target="_blank" rel="noreferrer">
									<span className="public-site-index">{String(index + 1).padStart(2, "0")}</span>
									<div>
										<span className="public-site-tag">{site.tag}</span>
										<h3>{site.title}</h3>
									</div>
									<p>{site.description}</p>
									<span className="public-site-url">{site.displayUrl}</span>
									<span className="public-site-arrow" aria-hidden="true">↗</span>
								</a>
							))}
						</div>
					</section>

					<section className="home-close">
						<p>Want to work together?</p>
						<Link to="/contact">
							Send me a message. <span aria-hidden="true">→</span>
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

export default Homepage;
