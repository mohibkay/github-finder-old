function Navbar({ title, icon }) {
  return (
    <div>
      <nav className="navbar bg-info">
        <div className="container">
          <h4>
            <i className={icon}></i> {title}
          </h4>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
