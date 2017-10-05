import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import Home from './components/homePage';
import About from './components/aboutPage';
import SearchApp from './components/search_app';

import Main from './components/common/main';

export default(
    <Route component={Main}>
        <Route path='/' component={Home}/>
        <Route path='/search' component={SearchApp}/>
        <Route path='/about' component={About}/>
    </Route>
        
);