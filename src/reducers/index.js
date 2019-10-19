import { combineReducers } from 'redux';
import states from './statesInventory';
import initialState from './initialState';


export default combineReducers({
  apiProcess,
  furnitures,
  furnitureStyles,
  furnituresDisplay
});

function apiProcess(state = initialState, action) {
  switch (action.type) {
    case states.onLoading:
      return Object.assign({}, state, {
        onLoading: action.onLoading
      })
    case states.hasError:
      return Object.assign({}, state, {
        hasError: action.hasError
      })
    case states.onSuccess:
      return Object.assign({}, state, {
        onSuccess: action.onSuccess
      })
    default:
      return initialState.apiProcess
  }
}

function furnitures(state= initialState, action) {
  return localStorage.getItem('furnitures') != null ? JSON.parse(localStorage.getItem('furnitures')) : null
}

function furnituresDisplay(state= initialState, action) {
  return localStorage.getItem('furnituresDisplay') != null ? JSON.parse(localStorage.getItem('furnituresDisplay')) : null
}

function furnitureStyles(state= initialState, action) {
  return localStorage.getItem('furnitureStyles') != null ? JSON.parse(localStorage.getItem('furnitureStyles')) : null
}
