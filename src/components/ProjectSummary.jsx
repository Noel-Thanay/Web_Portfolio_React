function ProjectSummary({ title, description }) {
  return (
    <div className="project-summary">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectSummary;
