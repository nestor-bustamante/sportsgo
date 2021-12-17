import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './assets/css/main.scss';

import Home from './views/Home/Home';
import Live from './views/Live/Live';
import Vod from './views/Vod/Vod';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/live" element={<Live />} />
          <Route exact path="/vod" element={<Vod />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
