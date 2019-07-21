import * as Type from './constants'

const requestTeams = () => {
  return {
    type: Type.GET_TEAMS_REQUEST,
  }
}

const requestTeamsSuccess = data => {
  return {
    type: Type.GET_TEAMS_SUCCESS,
    payload: data.data.api.teams,
  }
}

const requestTeamsError = error => {
  return {
    type: Type.GET_TEAMS_FAILURE,
    payload: error,
  }
}

export { requestTeams, requestTeamsSuccess, requestTeamsError }
