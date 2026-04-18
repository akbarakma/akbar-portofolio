import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import "./styles/project.css";
import "./styles/experience.css";

const Experience = (props) => {
  const { title, description, link, logo, years, role } = props;

  return (
    <div className="experience-row">
      <div className="experience-years">{years}</div>
      <div className="experience-body">
        <div className="experience-header">
          {logo ? (
            <div className="experience-logo">
              <img src={`logo/${logo}`} alt={`${title} logo`} />
            </div>
          ) : null}
          <div className="experience-header-text">
            <div className="experience-role">{role}</div>
            <h3 className="experience-company">{title}</h3>
          </div>
        </div>
        <div className="experience-description">{description}</div>
        {
          link !== null ? (
          <Link to={link} target="_blank" className="experience-link">
            <span>Visit {new URL(link).hostname.replace("www.", "")}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          ) : null
        }
      </div>
    </div>
  );
};

export default Experience;
