import { Fragment, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import CryptoJS from 'crypto-js';
import './Register.scss';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/img/sportsgo-logo-alt.svg';


const Register = () => {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors
    }
  } = useForm<any>({ shouldUnregister: true });
  
  const [datos, setDatos] = useState({
    name: '',
    lastname: '',
    email: '',
    emailConf: '',
    pass: '',
    passConf: ''
  });

  const handleInputChange = (ev: any) => {
    setDatos({
      ...datos,
      [ev.target.name]: ev.target.value
    });
    return ev;
  }

  const createCrypto = (name: string, data: any) => {
    const cipher = CryptoJS.SHA3(data, { outputLength: 512 });
    setDatos({
      ...datos,
      [name]: cipher.toString()
    });
  }
  
  const onSubmit: SubmitHandler<any> = (data: any, e: any) => {
    createCrypto('pass', data.pass);
    handleFormSubmit(e);
    e.preventDefault();
  }

  const handleFormSubmit = (ev: any) => {
    ev.preventDefault();
  }
  
  const validEmail = (value: any, target: any) => {
    if (target.type === 'email') {
      if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ) {
        target.classList.add("error");
      } else {
        target.classList.remove("error");
      }
    }
  }
  
  return (
    <Fragment>
      <div className="sportsgo-wrapper height-full-vh">
        <div className="row height-full-percentage">
          
          <div className="col col-6 display-flex align-center">
            <div className="row width-full">
              <div className="col col-8 margin-center">
                <h6>Registrarse</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className="row">

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="name">
                          <legend>Nombre</legend>
                            <input
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: 'Ingrese un nombre'
                                },
                                minLength: 1
                              })}
                              type="text"
                              placeholder="Ej. Juan"
                              name="name"
                              id="name"
                              className={errors.name && errors.name.message ? 'error': ''}
                              value={datos.name}
                              onChange={e => { 
                                handleInputChange(e);
                                setError("name", {
                                  type: "required",
                                });
                                
                              }}
                            />
                        </label>
                        <span className="form-error">{errors?.name?.message}</span>
                      </fieldset>                  
                    </div>

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="lastname">
                          <legend>Apellido</legend>
                          <input
                            {...register("lastname", {
                              required: {
                                value: true,
                                message: 'Ingrese un apellido'
                              },
                              minLength: 1
                            })}
                            type="text"
                            placeholder="Ej. Pérez"
                            name="lastname"
                            id="lastname"
                            value={datos.lastname}
                            className={errors.lastname && errors.lastname.message ? 'error' : ''}
                            onChange={e => {
                              handleInputChange(e);
                              setError("lastname", {
                                type: "required",
                              });
                            }}
                          />
                        </label>
                        <span className="form-error">{errors?.lastname?.message}</span>
                      </fieldset>                  
                    </div>

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="email">
                          <legend>Correo</legend>
                          <input
                            {...register("email", {
                              required: {
                                value: true,
                                message: 'Ingrese un correo',
                              }
                            })}
                            type="email"
                            placeholder="Ej. hola@mundo.cl"
                            name="email"
                            id="email"
                            value={datos.email}
                            className={errors.email && errors.email.message ? 'error' : ''}
                            onChange={(e: any) => {
                              handleInputChange(e);
                              validEmail(e.target.value, e.target);
                              setError("email", {
                                type: "required",
                              });
                            }}
                          />
                        </label>
                        <span className="form-error">{errors?.email?.message} </span>
                      </fieldset>                  
                    </div>

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="emailConf">
                          <legend>Confirma Correo</legend>
                          <input
                            {...register("emailConf", {
                              required: {
                                value: true,
                                message: 'Confirme el correo'
                              },
                              validate: {
                                compare: value => value === datos.email
                              }
                            })}
                            type="email"
                            placeholder="Ej. hola@mundo.cl"
                            name="emailConf"
                            id="emailConf"
                            value={datos.emailConf}
                            className={(errors.emailConf && errors.emailConf.message) || (errors.emailConf?.type === "compare") ? 'error' : ''}
                            onChange={(e: any) => {
                              handleInputChange(e);
                              validEmail(e.target.value, e.target);
                              setError("emailConf", {
                                type: "required",
                              });
                            }}
                          />
                        </label>
                        <span className="form-error">{errors?.emailConf?.message}</span>
                        {errors.emailConf?.type === "compare" && <span className="form-error">El correo no coincide</span> }
                      </fieldset>
                    </div>

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="pass">
                          <legend>Contraseña</legend>
                          <input
                            {...register("pass", {
                              required: {
                                value: true,
                                message: 'ingrese una contraseña'
                              },
                              minLength: 6
                            })}
                            type="password"
                            name="pass"
                            id="pass"
                            className={errors.pass && errors.pass.message ? 'error' : ''}
                            onChange={e => {
                              handleInputChange(e);
                              setError("pass", {
                                type: "required",
                              });
                            }}
                          />
                        </label>
                        <span className="form-error">{errors?.pass?.message}</span>
                      </fieldset>
                    </div>

                    <div className="col col-6">
                      <fieldset>
                        <label htmlFor="passConf">
                          <legend>Confirma Contraseña</legend>
                          <input
                            {...register("passConf", {
                              required: {
                                value: true,
                                message: 'Confirme contraseña'
                              },
                              minLength: 6,
                              validate: {
                                compare: value => value === datos.pass
                              }
                            })}
                            type="password"
                            name="passConf"
                            id="passConf"
                            className={(errors.passConf && errors.passConf.message) || (errors.passConf?.type === "compare") ? 'error' : ''}
                            onChange={e => {
                              handleInputChange(e);
                              setError("passConf", {
                                type: "required",
                                message: "Las contraseñas deben coincidir"
                              });
                            }}
                          />
                        </label>
                        <span className="form-error">{errors?.passConf?.message}</span>
                        {errors.passConf?.type === "compare" && <span className="form-error">La contraseña no coincide</span>}
                      </fieldset>
                    </div>
                    
                  </div>

                  <fieldset>
                    <button
                      type="submit"
                      className="primary"
                    >
                      Ingresar
                    </button>
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
    </Fragment>
  )
};

export default Register;
