import React from "react";

import "./styles/project.css";

const SingleProject = ({ title, description, link, company, skills, index, featured }) => {
	const indexLabel = String(index || 1).padStart(2, "0");
	const titleParts = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
	const cleanTitle = titleParts ? titleParts[1] : title;
	const location = titleParts ? titleParts[2] : "Jakarta, Indonesia";

	const card = (
		<article className={`project-card ${featured ? "project-card-featured" : ""}`}>
			<header>
				<span className="project-card-index">{indexLabel}</span>
				<span className="project-card-company">{company}</span>
				<span className="project-card-location">{location}</span>
			</header>

			<h3>{cleanTitle}</h3>
			<p>{description}</p>

			<ul aria-label="Technologies used">
				{skills.slice(0, 6).map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>

			<div className="project-card-bottom">
				<span>{link ? `Visit ${new URL(link).hostname.replace("www.", "")}` : "Private engagement"}</span>
				<span aria-hidden="true">{link ? "↗" : "—"}</span>
			</div>
		</article>
	);

	return link ? (
		<a className="project-card-link" href={link} target="_blank" rel="noreferrer">
			{card}
		</a>
	) : (
		<div className="project-card-link project-card-static">{card}</div>
	);
};

export default SingleProject;
