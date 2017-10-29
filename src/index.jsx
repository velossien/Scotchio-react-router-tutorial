import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import Home from "./common/home.component.jsx";
import About from "./common/about.component.jsx";
import Car from "./car/car.component.jsx";

render(
    <Router>
        <Route path="/" component={Home} />
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);