import * as Type from '../actions/constants'

const requestOdds = () => {
  return {
    type: Type.GET_ODDS_REQUEST,
  }
}

const requestOddsSuccess = data => {
  return {
    type: Type.GET_ODDS_SUCCESS,
    payload: data,
  }
}

const requestOddsError = error => {
  return {
    type: Type.GET_ODDS_FAILURE,
    payload: error,
  }
}

export { requestOdds, requestOddsSuccess, requestOddsError }