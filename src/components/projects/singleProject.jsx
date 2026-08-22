import React from "react";

// Project titles carry their location in a trailing paren, e.g.
// "Tannoi Mobile App (London, UK)". The projects page needs the bare name too.
export const splitTitle = (title) => {
	const parts = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
	return parts
		? { name: parts[1], location: parts[2] }
		: { name: title, location: "Jakarta, Indonesia" };
};

const SingleProject = ({ title, description, link, company, skills, index }) => {
	const indexLabel = String(index || 1).padStart(2, "0");
	const { name: cleanTitle, location } = splitTitle(title);

	const card = (
		<article className="project-card">
			<div className="project-card-top mono">
				<span className="project-index">{indexLabel}</span>
				<span className="project-company">{company}</span>
				<span className="project-location">{location}</span>
			</div>

			<h3 className="project-title">{cleanTitle}</h3>
			<p className="project-desc">{description}</p>

			<div className="project-bottom">
				<ul className="project-skills" aria-label="Technologies used">
					{skills.slice(0, 5).map((skill) => (
						<li key={skill} className="chip">
							{skill}
						</li>
					))}
				</ul>
				{link ? (
					<span className="project-cta mono">
						{new URL(link).hostname.replace("www.", "")}{" "}
						<span className="arrow" aria-hidden="true">
							↗
						</span>
					</span>
				) : (
					<span className="project-cta mono muted">internal · not public</span>
				)}
			</div>
		</article>
	);

	return link ? (
		<a
			className="project-wrap"
			href={link}
			target="_blank"
			rel="noreferrer"
			aria-label={`${cleanTitle} at ${company}, opens in a new tab`}
		>
			{card}
		</a>
	) : (
		<div className="project-wrap static">{card}</div>
	);
};

export default SingleProject;
