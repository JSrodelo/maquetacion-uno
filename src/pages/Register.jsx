import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="form-container">
      <input type="text" placeholder="Usuario" className="input-field" />
      <input type="password" placeholder="Contraseña" className="input-field" />
      <input type="text" placeholder="Nombre" className="input-field" />
      <input type="email" placeholder="Correo" className="input-field" />
      <button className="register-button">Registrarse</button>
      <Link to="/" className="link">¿Ya tiene una cuenta?</Link>
    </div>
  );
}
