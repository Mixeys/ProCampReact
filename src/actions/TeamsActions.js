import axios from '../api/axios'
import * as Type from './constants'

const getTeams = () => async (dispatch, getState) => {
    dispatch({
        type: Type.GET_TEAMS_REQUEST,
    })
    try {
        const response = await axios.get(`/teams/league/2`)
        dispatch({
            type: Type.GET_TEAMS_SUCCESS,
            payload: response.data.api.teams,
        })
    } catch (error) {
        dispatch({
            type: Type.GET_TEAMS_FAILURE,
            payload: error,
        })
    }
}

export { getTeams }