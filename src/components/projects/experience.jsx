import React from "react";

import "./styles/experience.css";

const Experience = ({ title, description, link, logo, years, role, index }) => {
	const indexLabel = String(index || 1).padStart(2, "0");

	return (
		<article className="experience-row">
			<div className="experience-marker">
				<span>{indexLabel}</span>
				<time>{years}</time>
			</div>
			<div className="experience-title">
				{logo ? (
					<div className="experience-logo">
						<img src={`/logo/${logo}`} alt="" />
					</div>
				) : null}
				<div>
					<span>{role}</span>
					<h3>{title}</h3>
				</div>
			</div>
			<div className="experience-summary">
				<p>{description}</p>
				{link ? (
					<a href={link} target="_blank" rel="noreferrer">
						Visit company <span aria-hidden="true">↗</span>
					</a>
				) : (
					<span className="experience-private">Private engagement</span>
				)}
			</div>
		</article>
	);
};

export default Experience;
