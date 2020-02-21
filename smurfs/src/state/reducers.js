import * as types from "./actionTypes";

  const initialState = {
    smurf: [],
    error: "",
    isFetching: false
  };

export function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA_START:
      return { ...state, error: "", isFetching: true };
    case types.FETCH_DATA_SUCCESS:
      return { ...state, error: "", isFetching: false, smurf: action.payload };
    case types.FETCH_DATA_FAILURE:
      return { ...state, error: action.payload, isFetching: false };

    case types.POST_DATA_START:
      return { ...state, isFetching: true };
    case types.POST_DATA_SUCCESS:
      return { ...state, smurf: action.payload, isFetching: false };
    case types.POST_DATA_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
      case types.DELETE_SMURF_START:
            return {
                ...state,
                deletingSmurf: true,
                error: ''
            }
        case types.DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                deletingSmurf: false,
                error: ''
            }
        case types.DELETE_SMURF_FAIL:
            return {
                ...state,
                deletingSmurf: false,
                error: action.payload
            }
    default:
      return state;
  }
}
