import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from "./common/main.component.jsx";
import Home from "./common/home.component.jsx";
import About from "./common/about.component.jsx";
import Car from "./car/car.component.jsx";
import CarDetail from "./car/car-detail.component.jsx";

import cars from "./car/cars.array.js";

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home} />
            <Route path="/cars" component={Car} data={cars}/>
            <Route path="/cars/:id" component={CarDetail} data={cars} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('container')
);