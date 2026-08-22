import React from "react";

import INFO from "../data/user";
import Seo from "../components/common/seo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const Contact = () => {
	return (
		<div className="site-shell">
			<Seo
				title="Contact | Akbar Danial Akma"
				description="Get in touch with Akbar Danial Akma, Senior Software Engineer in Jakarta. Email, LinkedIn, or GitHub. Open to interesting work and collaborations."
				path="/contact"
				schema={{
					"@context": "https://schema.org",
					"@type": "ContactPage",
					"@id": "https://akbarakma.com/contact#page",
					url: "https://akbarakma.com/contact",
					name: "Contact Akbar Danial Akma",
					mainEntity: { "@id": "https://akbarakma.com/#person" },
					isPartOf: { "@id": "https://akbarakma.com/#website" },
				}}
			/>
			<NavBar />

			<main className="site-main">
				<section className="contact-hero">
					<p className="page-eyebrow mono">Contact</p>
					<h1 className="page-title">Say hello</h1>
					<p className="page-lede">
						Open to interesting work, collaborations, or a good argument about logistics
						systems and AI agents. No pitch deck required.
					</p>
				</section>

				<section className="contact-grid" aria-label="Contact channels">
					<a href={`mailto:${INFO.main.email}`} className="contact-card primary">
						<span className="contact-label mono">Email, and it's the fastest</span>
						<span className="contact-value">{INFO.main.email}</span>
						<span className="contact-hint">I reply within a day.</span>
					</a>

					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						className="contact-card"
					>
						<span className="contact-label mono">LinkedIn</span>
						<span className="contact-value">in/akbarakma</span>
						<span className="contact-hint">For the professional stuff.</span>
					</a>

					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						className="contact-card"
					>
						<span className="contact-label mono">GitHub</span>
						<span className="contact-value">@akbarakma</span>
						<span className="contact-hint">Where the side quests live.</span>
					</a>
				</section>

				<section className="contact-elsewhere" aria-label="Other places to find me">
					<span className="contact-elsewhere-label mono">also running</span>
					<div className="contact-elsewhere-row">
						{INFO.publicSites.map((site) => (
							<a
								key={site.url}
								href={site.url}
								target="_blank"
								rel="noreferrer"
								className="elsewhere-chip"
							>
								{site.title} <span aria-hidden="true">↗</span>
							</a>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Contact;
