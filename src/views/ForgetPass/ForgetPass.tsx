import React from 'react';
import './ForgetPass.scss';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/sportsgo-logo-alt.svg';

const ForgetPass = () => (
  <div>
    <div className="sportsgo-wrapper height-full-vh">
      <div className="row height-full-percentage">
        
        <div className="col col-6 display-flex align-center">
          <div className="row width-full">
            <div className="col col-6 margin-center">
              <h6>Recuperar contraseña</h6>
              <form>
                <fieldset>
                  <label htmlFor="">
                    <legend>Correo</legend>
                    <input type="email" placeholder="Este es el placeholder" />
                    
                    <div className="message error">
                      Este es un mensaje de error
                    </div>

                    <div className="message warning">
                      Este es un mensaje de advertencia
                    </div>
                    
                    <div className="message success">
                      Este es un mensaje de éxito
                    </div>

                  </label>
                </fieldset>

                <fieldset>
                  <button className="primary">Recuperar contraseña</button>
                </fieldset>

              </form>
            </div>
          </div>
        </div>

        <div className="col col-6 display-flex align-center resp-none">
          <div className="logo-center">
            <img src={logo} alt="sportsgo.tv" />
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
);

export default ForgetPass;
