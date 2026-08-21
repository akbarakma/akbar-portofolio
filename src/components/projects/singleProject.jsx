import React from "react";

const SingleProject = ({ title, description, link, company, skills, index }) => {
	const indexLabel = String(index || 1).padStart(2, "0");
	const titleParts = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
	const cleanTitle = titleParts ? titleParts[1] : title;
	const location = titleParts ? titleParts[2] : "Jakarta, Indonesia";

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
