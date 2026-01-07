import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">♪</span>
          <span className="logo-text">Folksy</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
            Home
          </NavLink>
          <NavLink to="/artists" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Artists
          </NavLink>
          <NavLink to="/world-music" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            World Music
          </NavLink>
          <NavLink to="/protest-music" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Protest Music
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
