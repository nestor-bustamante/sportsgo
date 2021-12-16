import logo from '../../assets/img/sportsgo-logo.svg';
import Navbar from '../Navbar/Navbar';
const Footer = () => (
  <footer>
    <div className="row">
      <div className="col col-6">
        <div id="footer-logo">
          <a href="#;">
            <img src={ logo } alt="sportsgo.tv" />
          </a> 
        </div>
      </div>
      <div className="col col-6 justify-end">
        <Navbar />
      </div>
    </div>
  </footer>
);

export default Footer;
