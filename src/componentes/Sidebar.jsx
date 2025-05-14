import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Home</h2>
      <button onClick={() => navigate("/services")}>Servicios</button>
      <button onClick={() => navigate("/contact")}>Contacto</button>
      <button onClick={() => navigate("/about")}>Acerca de</button>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}
