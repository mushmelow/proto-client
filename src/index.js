import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import "semantic-ui-css/semantic.min.css";

import App from './App';
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/SignUp";

import rootReducer from "./rootReducer";
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(
// 	(state = {}) => state,
// 	applyMiddleware(thunk)
// );

render(
  <Provider store={store}>
	  <Router>
	    <App>
	      <Switch>
				  <Route path="/" exact component= {HomePage} />
				  <Route path="/signup" exact component= {SignUp}/>
	      </Switch>
	    </App>
	  </Router>
  </Provider>
, document.getElementById('root'));﻿
registerServiceWorker();