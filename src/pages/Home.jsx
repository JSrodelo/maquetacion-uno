import Sidebar from "../componentes/Sidebar.jsx";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-content">
        <h1>Home</h1>
      </div>
    </div>
  );
}
