import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/custom-style.css';
import './css/tachyons.min.css';
import App from './App';
import Header from './js/Header.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
