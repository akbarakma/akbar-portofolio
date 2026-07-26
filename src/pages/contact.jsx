import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const currentSEO = SEO.find((item) => item.page === "contact");

const channels = [
	["01", "Email", INFO.main.email, `mailto:${INFO.main.email}`],
	["02", "LinkedIn", "akbarakma", INFO.socials.linkedin],
	["03", "GitHub", "@akbarakma", INFO.socials.github],
	["04", "WhatsApp", "Start a conversation", "https://wa.me/6281388893502"],
	["05", "Résumé", "PDF · opens in a new tab", INFO.socials.cv],
];

const Contact = () => (
	<>
		<Helmet>
			<title>{`Contact | ${INFO.main.title}`}</title>
			<meta name="description" content={currentSEO.description} />
			<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			<link rel="canonical" href="https://akbarakma.com/contact" />
			<meta property="og:title" content={`Contact | ${INFO.main.title}`} />
			<meta property="og:description" content={currentSEO.description} />
			<meta property="og:url" content="https://akbarakma.com/contact" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://akbarakma.com/homepage.jpg" />
		</Helmet>

		<div className="page-content">
			<NavBar active="contact" />
			<main className="content-wrapper">
				<section className="contact-hero stagger">
					<div className="contact-kicker">
						<span className="eyebrow">Contact</span>
						<span className="contact-status">
							<span aria-hidden="true" />
							Open to new opportunities
						</span>
					</div>

					<h1>
						Have something to build?
						<br />
						<span>Let’s talk.</span>
					</h1>

					<div className="contact-lede">
						<p>
							I’m open to software roles, project work, and collaborations with teams
							that care about building things well.
						</p>
						<p>
							Tell me what you’re building, where you need help, and your timeline. Email
							is best, and I usually reply within a day.
						</p>
					</div>

					<a className="contact-email" href={`mailto:${INFO.main.email}`}>
						<span>Start with an email</span>
						<strong>{INFO.main.email}</strong>
						<b aria-hidden="true">↗</b>
					</a>
				</section>

				<section className="contact-details">
					<div className="contact-note">
						<div className="contact-note-mark" aria-hidden="true">
							A/
						</div>
						<h2>What to include.</h2>
						<ul>
							<li>What are you building?</li>
							<li>Where is it stuck?</li>
							<li>What would you like me to own?</li>
							<li>What is your timeline?</li>
						</ul>
						<p>You do not need a perfect brief. A few clear sentences are enough.</p>
					</div>

					<div className="contact-channels">
						<header>
							<span className="eyebrow">Other channels</span>
							<p>You can also find me here.</p>
						</header>
						<div>
							{channels.slice(1).map(([number, label, detail, href]) => (
								<a key={number} href={href} target="_blank" rel="noreferrer">
									<span>{number}</span>
									<strong>{label}</strong>
									<small>{detail}</small>
									<b aria-hidden="true">↗</b>
								</a>
							))}
						</div>
					</div>
				</section>

				<section className="contact-time">
					<div>
						<span>Based in</span>
						<strong>Jakarta, Indonesia</strong>
					</div>
					<div>
						<span>Best way to reach me</span>
						<strong>Email</strong>
					</div>
					<div>
						<span>Works with</span>
						<strong>Remote &amp; distributed teams</strong>
					</div>
				</section>

				<div className="page-footer">
					<Footer />
				</div>
			</main>
		</div>
	</>
);

export default Contact;
