import { useState } from 'react';
import search from '../../assets/img/search-icon.svg';
import { NavLink } from "react-router-dom";
// import UserMenu from '../UserMenu/UserMenu';

const LoginMenu = () => {

  const [showSearch, setShowSeacrh] = useState(false);
  const searchInput = () => {
    setShowSeacrh(!showSearch); return false;
  };
  
  return (
    <div className="login-menu">
      <ul>
        {showSearch ? <li><input type="text" /></li> : null}
        <li className="search">
          <a href="#;" onClick={searchInput}>
            <img src={search} alt="" />
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
      {/* <UserMenu /> */}
    </div>
  )
};

export default LoginMenu;
