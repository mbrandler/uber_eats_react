import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import restaurantReducer from './components/reducers/restaurantReducer'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'

const app = (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
