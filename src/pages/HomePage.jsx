import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <article className="hero-copy">
            <p className="eyebrow">Student learning Full Stack Development</p>
            <h1>Building Websites with clean code and good design.</h1>
            <p>
              I am a Computer Science and Engineering student at the National Institute of Technology, Warangal,
              currently in 3rd year of my B.Tech degree with interest in web development, software engineering,
              and problem solving.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/projects">View Projects</Link>
              <Link className="button button-secondary" to="/contact">Contact Me</Link>
            </div>
          </article>
          <aside className="hero-card" aria-label="Profile illustration">
            <a href="assets/image.png" target="_blank" rel="noreferrer">
              <img src="assets/image.png" alt="Abstract profile image" />
            </a>
          </aside>
        </>
      )}
    </section>
  );
}

export default HomePage;
