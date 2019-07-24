import * as Type from '../actions/constants'

const requestStandings = () => {
  return {
    type: Type.GET_STANDINGS_REQUEST,
  }
}

const requestStandingsSuccess = data => {
  return {
    type: Type.GET_STANDINGS_SUCCESS,
    payload: data.data.api.standings,
  }
}

const requestStandingsError = error => {
  return {
    type: Type.GET_STANDINGS_FAILURE,
    payload: error,
  }
}

export { requestStandings, requestStandingsSuccess, requestStandingsError }