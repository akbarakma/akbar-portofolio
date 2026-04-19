import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faFileLines } from "@fortawesome/free-regular-svg-icons/faFileLines";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const currentSEO = SEO.find((item) => item.page === "contact");
const seoKeywords = currentSEO.keywords.join(", ");

const CHANNELS = [
	{ key: "email", icon: faEnvelope, label: "Email", href: `mailto:${INFO.main.email}` },
	{ key: "github", icon: faGithub, label: "GitHub", href: INFO.socials.github },
	{ key: "linkedin", icon: faLinkedin, label: "LinkedIn", href: INFO.socials.linkedin },
	{ key: "whatsapp", icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/6281388893502" },
	{ key: "resume", icon: faFileLines, label: "Resume", href: INFO.socials.cv },
];

const Contact = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={seoKeywords} />
				<link rel="canonical" href="https://www.akbarakma.tech/contact" />
				<meta property="og:title" content={`Contact | ${INFO.main.title}`} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content="https://www.akbarakma.tech/contact" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.akbarakma.tech/homepage.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={`Contact | ${INFO.main.title}`} />
				<meta name="twitter:description" content={currentSEO.description} />
				<meta name="twitter:image" content="https://www.akbarakma.tech/homepage.jpg" />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<section className="contact-hero stagger">
						<div>
							<span className="contact-eyebrow">Contact · say hi</span>
							<h1 className="contact-display">
								Let's get in <em>touch</em>.
							</h1>
						</div>
						<div>
							<p className="contact-body">
								Whether it's about a role, a project you're working on, a question, or just tech talk — email works best, and I usually reply within a day.
							</p>
						</div>
					</section>

					<div className="contact-icons">
						{CHANNELS.map((c) => (
							<a
								key={c.key}
								href={c.href}
								target={c.key === "email" ? undefined : "_blank"}
								rel={c.key === "email" ? undefined : "noreferrer"}
								className="contact-icon"
								aria-label={c.label}
								title={c.label}
							>
								<FontAwesomeIcon icon={c.icon} className="contact-icon-glyph" />
								<span className="contact-icon-label">{c.label}</span>
							</a>
						))}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
