import React from "react";
import { Link } from "react-router-dom";

import Project from "./project";
import SingleProject from "./singleProject";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { isFromHomepage, isMobile } = props;

	let homepageProjects = INFO.homepageProjects;
	if (!isMobile) {
		homepageProjects = homepageProjects.slice(0,3);
	}

	return (
		<div className="all-projects-container">
			{
			isFromHomepage === true ?
			homepageProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))
			:
			<>
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project-single" key={index}>
					<SingleProject
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						company={project.company}
						skills={project.skills}
					/>
				</div>
			))}
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<Link to="/about" style={{ color: 'orange', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
					See More About Me and My Job Experience ...
				</Link>
			</div>
			</>
			}
		</div>
	);
};

export default AllProjects;
