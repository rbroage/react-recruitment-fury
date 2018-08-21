// Library
// Do this once before any other code in your app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// Css loader
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// Router
import {Router, Route} from './router';

// View
import MainView from './views/main';
import ContactView from './views/contact';

ReactDOM.render(
	<Router>
		<Route component={MainView}/>
		<Route name="contact" component={ContactView}/>
	</Router>,
	global.document.getElementById('root')
);
