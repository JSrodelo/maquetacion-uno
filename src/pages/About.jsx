import Sidebar from "../componentes/Sidebar.jsx";
import "./About.css";

export default function About() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h1>Acerca de</h1>
      </div>
    </div>
  );
}
