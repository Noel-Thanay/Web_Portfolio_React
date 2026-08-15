import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((entry) => entry.id === projectId);

  if (!project) {
    return (
      <section className="content-section">
        <h1>Project Not Found</h1>
        <p>The requested project detail page does not exist.</p>
        <Link className="button" to="/home">Back to Home</Link>
      </section>
    );
  }

  return (
    <section className="content-section detail-page">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>{project.title}</h2>
      </div>
      <article className="project-detail">
        <img className="detail-image" src={project.image} alt="" />
        <div>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.techStack.map((tech) => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
          <Link className="button" to="/projects">Back to Projects</Link>
        </div>
      </article>
    </section>
  );
}

export default ProjectDetailPage;
