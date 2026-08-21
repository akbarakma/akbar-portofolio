import React from "react";
import { Link } from "react-router-dom";

import INFO from "../data/user";
import Seo from "../components/common/seo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SingleProject from "../components/projects/singleProject";

const Homepage = () => {
	const highlights = INFO.highlightProjects
		.map((title) => INFO.projects.find((p) => p.title === title))
		.filter(Boolean);

	return (
		<div className="site-shell">
			<Seo
				title="Akbar Danial Akma | Senior Software Engineer"
				description="Senior Software Engineer in Jakarta with 5+ years building logistics systems at scale, marketplace integrations, mobile apps, and AI tools. TypeScript, Go, Python, Node.js, React."
				path="/"
			/>
			<NavBar />

			<main className="site-main">
				<section className="hero">
					<div className="hero-text">
						<p className="hero-eyebrow mono">
							<span>Jakarta, Indonesia</span>
							<span className="status-pill">
								<span className="status-dot" aria-hidden="true" />
								Open to interesting work
							</span>
						</p>
						<h1 className="hero-name">Akbar Danial Akma</h1>
						<p className="hero-role mono">Senior Software Engineer</p>
						<p className="hero-lede">{INFO.homepage.description}</p>

						<div className="hero-actions">
							<Link to="/projects" className="btn btn-solid">
								See the work
							</Link>
							<a
								href={INFO.socials.cv}
								target="_blank"
								rel="noreferrer"
								className="btn btn-ghost"
							>
								Download resume
							</a>
						</div>
					</div>
					<div className="hero-portrait">
						<img
							src="/homepage.webp"
							alt="Akbar Danial Akma, Senior Software Engineer, in Jakarta"
							width="800"
							height="800"
							fetchpriority="high"
						/>
					</div>
				</section>

				<section className="home-section no-rule" aria-label="By the numbers">
					<div className="stat-strip">
						{INFO.stats.map((stat) => (
							<div className="stat" key={stat.label}>
								<span className="stat-num">{stat.num ?? INFO.projects.length}</span>
								<span className="stat-label mono">{stat.label}</span>
							</div>
						))}
					</div>
				</section>

				<section className="home-section" aria-labelledby="selected-work">
					<div className="section-head">
						<span className="section-index mono">01</span>
						<h2 id="selected-work" className="section-title">
							Selected work
						</h2>
						<span className="section-rule" />
						<Link to="/projects" className="section-more mono">
							all {INFO.projects.length} →
						</Link>
					</div>
					<div className="project-grid">
						{highlights.map((project, i) => (
							<SingleProject key={project.title} {...project} index={i + 1} />
						))}
					</div>
				</section>

				<section
					className="home-section"
					aria-labelledby="live-sites"
					style={{ "--section-accent": "var(--accent-2)" }}
				>
					<div className="section-head">
						<span className="section-index mono">02</span>
						<h2 id="live-sites" className="section-title">
							Live on my domain
						</h2>
						<span className="section-rule" />
						<span className="work-count mono">running right now</span>
					</div>
					<ul className="sites-list">
						{INFO.publicSites.map((site) => (
							<li key={site.url}>
								<a href={site.url} target="_blank" rel="noreferrer" className="site-row">
									<span className="site-title">{site.title}</span>
									<span className="site-desc">{site.description}</span>
									<span className="site-url mono">
										{site.displayUrl} <span aria-hidden="true">↗</span>
									</span>
								</a>
							</li>
						))}
					</ul>
				</section>

				<section className="home-section home-cta" aria-label="Contact">
					<p className="cta-line">Got something you want built? Email beats everything else.</p>
					<a href={`mailto:${INFO.main.email}`} className="cta-mail">
						{INFO.main.email}
					</a>
					<span className="cta-sub">
						I read all of it and I actually reply, usually within a day.
					</span>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Homepage;
