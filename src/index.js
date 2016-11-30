import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Welcome from './components/Welcome';
import { Router, Route, browserHistory  } from 'react-router';

// Render the main component into the dom
ReactDOM.render((

  <Router history={browserHistory }>
     <Route path="/" component={App} ></Route>
     <Route path="/welcome" component={Welcome} />

  </Router>


  ), document.getElementById('app'));
