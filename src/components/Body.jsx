import SidebarProfile from './SidebarProfile.jsx';
import './Body.css';

function Body() {
  return (
    <main className="body-main">
      <div className="body-inner">
        <SidebarProfile />
        <div className="body-content" />
      </div>
    </main>
  );
}

export default Body;
