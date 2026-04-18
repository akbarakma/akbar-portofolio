import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, link, index, featured } = props;

	const indexLabel = index ? `0${index}`.slice(-2) : "01";

	const titleParts = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
	const cleanTitle = titleParts ? titleParts[1] : title;
	const location = titleParts ? titleParts[2] : null;

	const linkContent =
		link !== null ? (
			<span className="highlight-link">
				<span>Visit project</span>
				<FontAwesomeIcon icon={faArrowRight} />
			</span>
		) : (
			<span className="highlight-link highlight-link-private">
				<span>Private engagement</span>
			</span>
		);

	const inner = (
		<div className={`highlight ${featured ? "highlight-featured" : "highlight-tile"}`}>
			<div className="highlight-rail">
				<span className="highlight-index">{indexLabel}</span>
				{location ? <span className="highlight-location">{location}</span> : null}
			</div>
			<div className="highlight-body">
				<h3 className="highlight-title">{cleanTitle}</h3>
				<p className="highlight-description">{description}</p>
				{linkContent}
			</div>
		</div>
	);

	return link !== null ? (
		<Link to={link} target="_blank" className="highlight-anchor">
			{inner}
		</Link>
	) : (
		<div className="highlight-anchor highlight-anchor-static">{inner}</div>
	);
};

export default Project;
