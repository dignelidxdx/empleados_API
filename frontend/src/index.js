import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const initialState = {
  'user': {},
  'readBlog': {},
  'myBlog': [],
  'certificados': [
    {
      'id': 1,
      'title': 'MySQL y SQL',
      'year': 2020,
      'hour': 30,
      'png': 'https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/diploma-sql-mysql-1.png?raw=true',
    },

    {
      'id': 2,
      'title': 'JAVA SE Avanzado',
      'year': 2020,
      'hour': 120,
      'png': 'https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/diploma-java-avanzado-1.png?raw=true',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
