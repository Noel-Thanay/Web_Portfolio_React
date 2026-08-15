import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="content-section not-found">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button" to="/home">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
