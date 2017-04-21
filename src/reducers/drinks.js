import createReducer from './createReducer'
import * as types from '../actions/types'

export const drinksList = createReducer({}, {
  [types.STORE_DRINKS_LIST] (state, action) {
    let newState = {}
    action.drinks.forEach((drink) => {
      newState[drink.idDrink] = drink
    })
    return newState
  }
})
