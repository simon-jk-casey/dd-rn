import { combineReducers } from 'redux'
import * as drinksReducer from './drinks'

export default combineReducers(Object.assign(
  drinksReducer
))
