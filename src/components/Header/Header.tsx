import logo from '../../assets/img/sportsgo-logo.svg';
import Navbar from '../Navbar/Navbar';
import LoginMenu from '../LoginMenu/LoginMenu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showRespMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <header>
      
      <div className="row">
        <div className="col col-6 display-flex align-center">
          <div className="brand">
            <NavLink
              to="/"
            >
              <img src={logo} alt="sportsgo.tv" />
            </NavLink>
          </div>
          <span className="resp-none">
            <Navbar />
          </span>
        </div>

        <div className="col col-6 display-flex align-center justify-end resp-none">
          <LoginMenu />
        </div>

      </div>

      <div className={ showMenu ? "burger resp-show active" : "burger resp-show"} onClick={showRespMenu}>
        <span></span>
      </div>

      <div className={ showMenu ? "resp-menu active" : "resp-menu"}>
        <Navbar />
        <LoginMenu />
      </div>
      
    </header>
  );
}



export default Header;
