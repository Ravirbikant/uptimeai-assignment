import Top from './Top.jsx';
import ProfileTabs from './ProfileTabs.jsx';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header">
      <Top />
      <ProfileTabs />
    </header>
  );
}

export default Navbar;
