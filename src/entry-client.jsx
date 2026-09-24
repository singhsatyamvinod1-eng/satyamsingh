import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

hydrateRoot(document.getElementById('root'), <BrowserRouter><App/></BrowserRouter>);
