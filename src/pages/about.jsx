import React from "react";

import INFO from "../data/user";
import Seo from "../components/common/seo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Experience from "../components/projects/experience";

const About = () => {
	return (
		<div className="site-shell">
			<Seo
				title="About | Akbar Danial Akma"
				description="Akbar Danial Akma is a Senior Software Engineer in Jakarta. Five years across backend and frontend at Sicepat Ekspres, Hubbed, Gramedia, and Valhalla Technologies, working in TypeScript, Go, Python, Node.js, and React."
				path="/about"
				image="/about.jpg"
			/>
			<NavBar />

			<main className="site-main">
				<section className="page-head">
					<p className="page-eyebrow mono">About</p>
					<h1 className="page-title">Who I am</h1>
				</section>

				<section className="about-grid">
					<div className="about-side">
						<div className="about-portrait">
							<img
								src="/about.webp"
								alt="Akbar Danial Akma, Senior Software Engineer"
								width="800"
								height="800"
								fetchpriority="high"
							/>
						</div>
						<div className="about-meta mono">
							<span>Jakarta, Indonesia</span>
						</div>
						<div className="about-actions">
							<a
								href={INFO.socials.cv}
								target="_blank"
								rel="noreferrer"
								className="btn btn-solid"
							>
								Download resume
							</a>
							<a href={`mailto:${INFO.main.email}`} className="btn btn-ghost">
								Email me
							</a>
						</div>
					</div>

					<div className="about-body">
						<p className="about-lede">{INFO.about.description}</p>

						<div className="about-facts">
							<div className="fact">
								<span className="fact-label mono">Currently</span>
								<span>
									Senior Software Engineer at Sicepat Ekspres, keeping the logistics
									systems standing on the days that matter.
								</span>
							</div>
							<div className="fact">
								<span className="fact-label mono">Focus</span>
								<span>
									Fullstack with TypeScript, Python, Go, Node.js, and React. Happiest
									somewhere near the database.
								</span>
							</div>
							<div className="fact">
								<span className="fact-label mono">Side quests</span>
								<span>
									Benchmarking AI models against each other, self-hosting my own tools,
									and building small agents that do real work while I sleep.
								</span>
							</div>
						</div>
					</div>
				</section>

				<section aria-labelledby="timeline" className="work-section">
					<div className="section-head">
						<span className="section-index mono">01</span>
						<h2 id="timeline" className="section-title">
							Where I've worked
						</h2>
						<span className="section-rule" />
					</div>
					<div className="exp-list">
						{INFO.jobExperience.map((job) => (
							<Experience key={job.title + job.years} {...job} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default About;
