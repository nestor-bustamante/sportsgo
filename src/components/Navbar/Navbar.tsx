
import { NavLink } from "react-router-dom";

const Navbar = () => (


  <nav>
    <ul className="display-flex align-center">
      <li>
        <NavLink
          to="/"
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/live"
        >
          Live
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/vod"
        >
          VoD
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
