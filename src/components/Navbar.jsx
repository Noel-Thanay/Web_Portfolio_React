import { NavLink, Link } from 'react-router-dom';

function Navbar({ theme, onThemeToggle }) {
  return (
    <header className="site-header">
      <Link className="brand" to="/Home">D Noel Thanay</Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink className="nav-button" to="/Home">Home</NavLink>
        <NavLink className="nav-button" to="/about">About</NavLink>
        <NavLink className="nav-button" to="/projects">Projects</NavLink>
        <NavLink className="nav-button" to="/contact">Contact</NavLink>
        <button className="theme-button" onClick={onThemeToggle}>
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
