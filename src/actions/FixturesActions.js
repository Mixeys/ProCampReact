import axios from '../api/axios'
import * as Type from './constants'

const getFixtures = () => async (dispatch, getState) => {
    dispatch({
        type: Type.GET_FIXTURES_REQUEST,
    })
    try {
        const response = await axios.get(`fixtures/league/2`)
        console.log('response: ', response)
        dispatch({
            type: Type.GET_FIXTURES_SUCCESS,
            payload: response.data.api.fixtures,
        })
    } catch (error) {
        dispatch({
            type: Type.GET_FIXTURES_FAILURE,
            payload: error,
        })
    }
}

export { getFixtures }