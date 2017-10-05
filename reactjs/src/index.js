// import App from './components/app';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render( < App / > , document.querySelector('.container'));
// The above is for app.js


// import App from './components/app';
// import SearchApp from './components/search_app';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render( < SearchApp / > , document.querySelector('.container'));

import App from './components/app';
import SearchApp from './components/search_app';
import MVC from './components/mvc';
import NameList from './components/Namelist';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';


//ReactDOM.render( < Router history={browserHistory} routes={routes} / > , document.querySelector('.container'));
ReactDOM.render( < SearchApp / > , document.querySelector('.container'));
