import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';

library.add(fab, far, fas);

ReactDOM.render(
  <React.StrictMode>
    <Home id="home" />
  </React.StrictMode>,
  document.getElementById('root'),
);
