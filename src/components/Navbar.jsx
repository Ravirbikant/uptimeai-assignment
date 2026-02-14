function Navbar() {
  return (
    <header>
      <nav>
        <span>GitHub</span>
        <a href="#overview">Overview</a>
        <a href="#repositories">Repositories</a>
        <a href="#projects">Projects</a>
        <a href="#packages">Packages</a>
        <a href="#stars">Stars</a>
        <input type="search" placeholder="Type to search" />
        <span>+</span>
        <span>🔔</span>
        <span>?</span>
        <span>👤</span>
      </nav>
    </header>
  );
}

export default Navbar;
