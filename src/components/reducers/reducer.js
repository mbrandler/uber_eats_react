import { combineReducers } from 'redux'
import restaurantReducer from './restaurant-reducer.js'
import snacksReducer from './snacksReducer.js'

export default combineReducers({
	restaurantReducer,
	snacksReducer
})
