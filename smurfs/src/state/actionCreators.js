import * as types from './actionTypes'
import axios from 'axios'

const smurfsAPI = "http://localhost:3333/smurfs"

export const fetchAllSmurfs = () => dispatch => {
    dispatch({ type: types.FETCH_DATA_START });
    axios
      .get(smurfsAPI)
      .then(res => {
        dispatch({ type: types.FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: types.FETCH_DATA_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };
  
  export const postNewSmurf = newSmurf => dispatch => {
   
    dispatch({ type: types.POST_DATA_START });
    axios
      .post(smurfsAPI, newSmurf)
      .then(res => {
        dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: types.POST_DATA_FAILURE, payload: err });
      });
  };
  
  export const deleteSmurf = id =>  {
    return dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: types.DELETE_SMURF_FAIL, payload: err.response});
        });
    };
} 