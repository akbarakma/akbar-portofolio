import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Experience = (props) => {
  const { title, description, link, logo, years, role } = props;

  const imgSrc = `logo/${logo}`;

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-logo">
            <img src={imgSrc} alt="logo" />
          </div>
          <div className="project-title" style={{ color: 'black', fontSize: '20px' }}>{title}</div>
          <div className="project-company" style={{ color: 'black' }}>
            {years}
          </div>
          <div className="project-company" style={{ color: 'black', fontWeight: 'bold' }}>
            {role}
          </div>
          <div className="project-description" style={{ color: 'black' }}>{description}</div>
          {
            link !== null ? 
            <Link to={link} target="_blank">
              <div className="project-link">
                <div className="project-link-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>

                <div className="project-link-text">{link}</div>
              </div>
            </Link> : <></>
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
