const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <a className="navbar-logo" href="/home">
        <h4></h4>
      </a>
      <div className="navbar-content">
        <ul className="navbar-nav">
          <li className="nav-item1">
            <input
              type="date"
              name=""
              className="nav-link-date-picker"
            />

            <a className="nav-link-globe" href="/#" id="hideListButton">
              Globe
            </a>

          </li>
          <li className="nav-item2">
            <button className="btn-export">Export</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
