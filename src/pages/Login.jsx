import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {
  return (
    <div className="form-container">
      <input type="text" placeholder="Usuario" className="input-field" />
      <input type="password" placeholder="Contraseña" className="input-field" />
      <button className="login-button">Iniciar Sesión</button>
      <Link to="/register" className="link">¿No tiene una cuenta?</Link>
    </div>
  );
}
