import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/sportsgo-logo.svg';
import Navbar from '../Navbar/Navbar';
const Footer = () => (
  <footer>
    <div className="row">
      <div className="col col-6">
        <div id="footer-logo">
          <NavLink
            to="/"
          >
            <img src={logo} alt="sportsgo.tv" />
          </NavLink>
        </div>
      </div>
      <div className="col col-6 justify-end resp-none">
        <Navbar />
      </div>
    </div>
  </footer>
);

export default Footer;
