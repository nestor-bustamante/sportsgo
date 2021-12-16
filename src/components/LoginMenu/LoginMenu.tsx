
import search from '../../assets/img/search-icon.svg';

const LoginMenu = () => (
  <div className="login-menu">
    <ul>
      <li className="search">
        <a href="#;">
          <img src={ search } alt="" />
        </a>
      </li>
      <li>
        <button className="primary">Iniciar sesión</button>
      </li>
      <li className="register">
        <a href="#;">Registrarse</a>
      </li>
    </ul>
  </div>
);

export default LoginMenu;
