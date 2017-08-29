import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import './index.css';
import './css/tachyons.min.css';
import './css/custom-style.css';
import App from './App';
import Header from './js/Header.js';
import Banner from './js/Banner.js';
import CommunityMembersWrapper from './js/CommunityMembersWrapper.js';
import Footer from './js/Footer.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Banner bannerStyle="community-members-banner"/>, document.getElementById('banner'));
ReactDOM.render(<CommunityMembersWrapper />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
