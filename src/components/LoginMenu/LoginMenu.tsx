
import search from '../../assets/img/search-icon.svg';
import { NavLink } from "react-router-dom";


const LoginMenu = () => (
  <div className="login-menu">
    <ul>
      <li className="search">
        <a href="#;">
          <img src={ search } alt="" />
        </a>
      </li>
      <li>
        <NavLink
          to="/login"
          className="primary"
        >
          Iniciar sesión
        </NavLink>
      </li>
      <li className="register">
        <NavLink
          to="/register"
        >
          Registrarse
        </NavLink>
      </li>
    </ul>
  </div>
);

export default LoginMenu;
