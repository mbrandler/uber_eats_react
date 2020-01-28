import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer.js'
import snacksReducer from './snacksReducer.js'

export default combineReducers({
	restaurantReducer,
	snacksReducer
})