import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import NavHandler from './components/navHandler/navHandler.component';

import store from './redux/store';

import './app.scss';
import './general.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavHandler />
      </Router>
    </Provider>
  );
};

export default App;
