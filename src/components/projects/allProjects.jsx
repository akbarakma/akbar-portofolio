import React from "react";

import Project from "./project";
import SingleProject from "./singleProject";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { isFromHomepage, isMobile } = props;

	let homepageProjects = INFO.homepageProjects;
	if (!isMobile) {
		homepageProjects = homepageProjects.slice(0, 3);
	}

	return isFromHomepage === true ? (
		<div className="highlights">
			{homepageProjects.map((project, index) => (
				<Project
					key={index}
					index={index + 1}
					featured={index === 0}
					logo={project.logo}
					title={project.title}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
				/>
			))}
		</div>
	) : (
		<div className="all-projects-container-single">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project-single" key={index}>
					<SingleProject
						index={index + 1}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						company={project.company}
						skills={project.skills}
						featured={index === 0}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
