import Skills from '../components/Skills.jsx';

function AboutPage() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Me</h2>
      </div>
      <div className="about-grid">
        <article>
          <p>
            I enjoy exploring modern web technologies, designing user-centered interfaces, and transforming
            concepts into practical applications. My work reflects a balance between creativity, structure,
            and attention to detail.
          </p>
        </article>
        <article>
          <ul className="info-list">
            <li><strong>Languages:</strong> C++, Java, Python, R, HTML5, CSS3, JavaScript, SQL</li>
            <li><strong>Developer Tools:</strong> Git, GitHub, VS Code, Linux (Basic)</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Analytical Thinking, Team Collaboration, Communication, Quick Learning</li>
            <li><strong>Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Compiler Design, Probability & Statistics</li>
          </ul>
        </article>
      </div>
      <Skills />
    </section>
  );
}

export default AboutPage;
