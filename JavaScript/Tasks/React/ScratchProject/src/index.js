import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/AppComponent';
import './scss/main.scss'

render(
    <AppComponent name="Syed" />, 
    document.getElementById('root')
);