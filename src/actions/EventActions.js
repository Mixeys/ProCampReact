import * as Type from '../actions/constants'

const requestEvent = () => {
  return {
    type: Type.GET_EVENT_REQUEST,
  }
}

const requestEventSuccess = data => {
  return {
    type: Type.GET_EVENT_SUCCESS,
    payload: data.data.api.events,
  }
}

const requestEventError = error => {
  return {
    type: Type.GET_EVENT_FAILURE,
    payload: error,
  }
}

export { requestEvent, requestEventSuccess, requestEventError }