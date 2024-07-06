import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <Link to={props.link}>
      <img className="hover" src={props.logo} alt={`${props.altText} logo`} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Link>
  );
}

ProjectCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  altText: PropTypes.string, // Ensure link is required
};

ProjectCard.defaultProps = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  title: "Viberr",
  description: "Mobile App",
  altText: "Default alt text",
};

export default ProjectCard;
