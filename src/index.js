import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './stores/config';

import App from './components/app';

import 'semantic-ui-css/semantic.min.css';

const history= createBrowserHistory();
const store= configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Switch>
        <Route path="/" name="root" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
