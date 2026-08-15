import ProjectSummary from './ProjectSummary.jsx';

function ProjectCard({ project, showDetails, onToggleDetails }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img className="project-card__image" src={project.image} alt="" />
      </div>
      <ProjectSummary title={project.title} description={project.description} />
      <div className="tag-list">
        {project.techStack.map((tech) => (
          <span className="tag" key={tech}>{tech}</span>
        ))}
      </div>
      <button className="button button-small" onClick={() => onToggleDetails(project.id)}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showDetails && (
        <div className="details-panel">
          <p><strong>Focus:</strong> {project.title}</p>
          <p><strong>Stack:</strong> {project.techStack.join(', ')}</p>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
