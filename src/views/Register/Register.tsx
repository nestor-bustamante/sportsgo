import React from 'react';
import './Register.scss';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/sportsgo-logo-alt.svg';

const Register = () => (
  <div>
    <div className="sportsgo-wrapper height-full-vh">
      <div className="row height-full-percentage">
        
        <div className="col col-6 display-flex align-center">
          <div className="row width-full">
            <div className="col col-8 margin-center">
              <h6>Registrarse</h6>
              <form>
                <div className="row">
                  
                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Nombre</legend>
                        <input type="text" className="error" placeholder="Este es el placeholder" />
                      </label>
                    </fieldset>                  
                  </div>

                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Apellido</legend>
                        <input type="text" placeholder="Este es el placeholder" />
                      </label>
                    </fieldset>                  
                  </div>

                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Correo</legend>
                        <input type="email" placeholder="Este es el placeholder" />
                      </label>
                    </fieldset>                  
                  </div>

                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Reingresar Correo</legend>
                        <input type="email" placeholder="Este es el placeholder" />
                      </label>
                    </fieldset>
                  </div>

                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Seleccione algo</legend>
                        <select name="" id="">
                          <option value="" selected disabled>Seleccione</option>
                          <option value="">Opción 01</option>
                          <option value="">Opción 02</option>
                          <option value="">Opción 03</option>
                        </select>
                      </label>
                    </fieldset>
                  </div>

                  <div className="col col-6">
                    <fieldset>
                      <label htmlFor="">
                        <legend>Seleccione otra cosa</legend>
                        <select name="" id="">
                          <option value="" selected disabled>Seleccione</option>
                          <option value="">Opción 01</option>
                          <option value="">Opción 02</option>
                          <option value="">Opción 03</option>
                        </select>
                      </label>
                    </fieldset>
                  </div>
                  
                </div>

                <fieldset>
                  <button type="submit" disabled className="primary">Ingresar</button>
                </fieldset>
                
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

export default Register;
