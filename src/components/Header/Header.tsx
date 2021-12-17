import logo from '../../assets/img/sportsgo-logo.svg';
import Navbar from '../Navbar/Navbar';
import LoginMenu from '../LoginMenu/LoginMenu';
import { NavLink } from 'react-router-dom';

const Header = () => (
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
        <Navbar />
      </div>

      <div className="col col-6 display-flex align-center justify-end">
        <LoginMenu />
      </div>

    </div>

  </header>

);

export default Header;
