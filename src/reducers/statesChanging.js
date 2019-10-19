import states from './statesInventory'

export function onLoading (status, message = '', key = '') {
  return {
    type: states.onLoading,
    onLoading: {status, message, key}
  }
}

export function hasError (status, message = '', key = '') {
  return {
    type: states.hasError,
    hasError: {status, message, key}
  }
}

export function onSuccess (status, message = '', key = '') {
  return {
    type: states.onSuccess,
    onSuccess: {status, message, key}
  }
}
