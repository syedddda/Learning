import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/AppComponent';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './scss/main.scss';

render(
    <AppComponent name="Syed" />, 
    document.getElementById('root')
);