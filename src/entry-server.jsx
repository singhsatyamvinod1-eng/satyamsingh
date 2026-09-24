import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App.jsx';

export function render(location){return renderToString(<StaticRouter location={location}><App/></StaticRouter>)}
