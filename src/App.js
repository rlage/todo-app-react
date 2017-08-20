import React from 'react';
import './App.css';
import { populateApp } from './actions/actions.js'
import { applyMiddleware, createStore } from 'redux'
import appReducer from './appReducer.js'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import API from './api/api.js'
import TasksListContainer from './TasksList/TasksListContainer.js'


const store = createStore(appReducer, applyMiddleware(logger))

const ajaxCallback = (data) => {
    store.dispatch(populateApp(data))
};
API.getTodos(ajaxCallback)


const App = () => {
    return (
      <Provider store={store}>
        <div className="app">
          <TasksListContainer/>
        </div>
      </Provider>
    );
}

export default App;
