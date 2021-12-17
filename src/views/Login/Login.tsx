import React from 'react';
import { NavLink } from "react-router-dom";
import './Login.scss';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/sportsgo-logo-alt.svg';

const Login = () => (
  <div>
    <div className="sportsgo-wrapper height-full-vh">
      <div className="row height-full-percentage">
        
        <div className="col col-6 display-flex align-center">
          <div className="row width-full">
            <div className="col col-6 margin-center">
              <h6>Ingresar</h6>
              <form>
                <fieldset>
                  <label htmlFor="">
                    <legend>Usuario</legend>
                    <input type="text" placeholder="Este es el placeholder" />
                  </label>
                </fieldset>

                <fieldset>
                  <label htmlFor="">
                    <legend>Contraseña</legend>
                    <input type="password" />
                  </label>
                </fieldset>

                <fieldset>
                  <button className="primary">Ingresar</button>
                </fieldset>
                
                <fieldset>
                  <NavLink
                    to="/forgetpass"
                    className="special-link"
                  >
                    ¿Olvidó su contraseña?
                  </NavLink>
                </fieldset>
               
                {/* 
                <div className="switch">
                  <fieldset>
                    <label>
                      <legend>Esto es su switch</legend>
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </fieldset>
                </div>
                */}
                
              </form>
            </div>
          </div>
        </div>

        <div className="col col-6 display-flex align-center">
          <div className="logo-center">
            <img src={logo} alt="sportsgo.tv" />
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
);

export default Login;
