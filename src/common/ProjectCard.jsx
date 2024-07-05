import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <a href={props.link} target="_blank">
      <img className="hover" src={props.logo} alt={`${props.altText} logo`} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProjectCard.defaultProps = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  title: "Viberr",
  description: "Mobile App",
};

export default ProjectCard;
