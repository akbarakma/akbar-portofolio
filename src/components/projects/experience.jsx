import React from "react";

const Experience = ({ title, description, link, logo, years, role }) => {
	return (
		<article className="exp-row">
			<div className="exp-when mono">
				<time>{years}</time>
			</div>

			<div className="exp-main">
				<header className="exp-head">
					{logo ? (
						<img className="exp-logo" src={`/logo/${logo}`} alt="" loading="lazy" />
					) : null}
					<div>
						<h3 className="exp-company">{title}</h3>
						<span className="exp-role mono">{role}</span>
					</div>
				</header>
				<p className="exp-desc">{description}</p>
				{link ? (
					<a className="exp-link mono" href={link} target="_blank" rel="noreferrer">
						{new URL(link).hostname.replace("www.", "")} <span aria-hidden="true">↗</span>
					</a>
				) : null}
			</div>
		</article>
	);
};

export default Experience;
