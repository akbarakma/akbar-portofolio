import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import "./styles/project.css";

const SingleProject = (props) => {
  const { title, description, link, company, skills, index, featured } = props;

  const indexLabel = index ? `0${index}`.slice(-2) : "";

  return (
    <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
      <div className="project-card-rail">
        <span className="project-card-index">{indexLabel}</span>
        <span className="project-card-rule" aria-hidden="true" />
      </div>

      <div className="project-card-body">
        <header className="project-card-head">
          {company ? (
            <span className="project-card-chip">{company}</span>
          ) : null}
          {featured ? (
            <span className="project-card-flag">Featured</span>
          ) : null}
        </header>

        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        {skills && skills.length > 0 ? (
          <ul className="project-card-stack">
            {skills.map((skill) => (
              <li key={skill} className="project-card-stack-pill">
                {skill}
              </li>
            ))}
          </ul>
        ) : null}

        {link !== null ? (
          <Link to={link} target="_blank" className="project-card-link">
            <span>Visit {new URL(link).hostname.replace("www.", "")}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        ) : (
          <span className="project-card-link project-card-link-private">
            Private engagement · code under NDA
          </span>
        )}
      </div>
    </article>
  );
};

export default SingleProject;
