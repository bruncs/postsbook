import React from 'react';
import { Provider } from 'react-redux';
import moment from 'moment';

import './styles/global';

import Routes from './routes';
import store from './store';

moment.locale('pt-br');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
