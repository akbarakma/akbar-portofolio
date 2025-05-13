import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const SingleProject = (props) => {
  const { title, description, link, company, skills } = props;

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container-single">
          {/* <div className="project-logo">
            <img src={logo} alt="logo" />
          </div> */}
          <div className="project-title" style={{ color: 'black' }}>{title}</div>
          <div className="project-company" style={{ color: 'black' }}>
            While working at: {company}
          </div>
          
          <div style={{ fontWeight: 'bold' }}>Summary:</div>
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
          <div className="project-company" style={{ color: 'black', marginTop: '20px' }}>
            Skills being used: {skills.join(', ')}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProject;
