import { Platform } from 'react-native'

import * as types from './types'

export function getDrinks () {
  const url = () => {
    if (Platform.OS === 'android') {
      return 'http://192.168.20.110:3000/drinks'
    } else {
      return 'http://localhost:3000/drinks'
    }
  }
  return (dispatch, getState) => {
    return fetch(url())
    .then((response) => response.json())
    .then((responseJson) => {
      let retrievedDrinks = responseJson
      dispatch(storeDrinksList(retrievedDrinks))
    })
    .catch((err) => {
      throw err
    })
  }
}

export function storeDrinksList ({drinks}) {
  return {
    type: types.STORE_DRINKS_LIST,
    drinks
  }
}
