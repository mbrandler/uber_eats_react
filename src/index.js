import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import restaurantReducer from './components/reducers/restaurantReducer.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import * as serviceWorker from './serviceWorker'

const store = createStore(restaurantReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// serviceWorker.unregister();
