import logo from '../../assets/img/sportsgo-logo.svg';
import Navbar from '../Navbar/Navbar';
import LoginMenu from '../LoginMenu/LoginMenu';

const Header = () => (
  <header>
    <div className="row">
      <div className="col col-6 display-flex align-center">
        <div className="brand">
          <a href="#;" title="sportsgo.tv">
            <img src={logo} alt="sportsgo.tv" />
          </a>
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
