import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer/reducer';
import App from './Components/App';
import calcGridSize from './Initialization/calcGridSize';
//import {makeGrid} from './Reducer/initialState';
//import INITIAL_STATE from './Reducer/initialState';

//compute grid size before initializing redux store
//const {gridWidth, gridHeight} = calcGridSize()
//const initialGrid = makeGrid(gridWidth, gridHeight);
//INITIAL_STATE.set('characterGrid', initialGrid);

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)