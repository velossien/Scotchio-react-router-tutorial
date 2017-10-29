import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from "./common/main.component.jsx";
import Home from "./common/home.component.jsx";
import About from "./common/about.component.jsx";
import Car from "./car/car.component.jsx";

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/cars" component={Car} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('container')
);