import React from 'react';
import logo from './logo.svg';
import './App.css';
import { populateApp } from './actions/actions.js'
import { applyMiddleware, createStore } from 'redux'
import appReducer from './appReducer.js'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import API from './api/api.js'


const store = createStore(appReducer, applyMiddleware(logger))

const ajaxCallback = (data) => {
    store.dispatch(populateApp(data))
};
API.getTodos(ajaxCallback)


const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

export default App;
