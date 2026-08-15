import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            showDetails={expandedProjectId === project.id}
            onToggleDetails={(id) => setExpandedProjectId(current => current === id ? null : id)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
