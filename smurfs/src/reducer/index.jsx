const initialState = {
    smurfs: [],
    activeSmurf: null
 }

 export default function reducers (state = initialState, action) {
    switch (action.type) {
        case "GET_DATA_SUCCESS":
          return {
            ...state,
            smurfs: [
              action.payload
            ]
          }
        case "GET_DATA_FAIL":
          return {
            ...state
          }
        case "SEND_DATA_SUCCESS":
          return {
            smurfs: [action.payload],
            activeSmurf: null
          }
        case "SET_ACTIVE_SMURF":
          return {
            ...state,
            activeSmurf: action.payload
          }
        case "DELETE_ACTIVE_SMURF":
            return {
              smurfs: [action.payload],
              activeSmurf: null
            }
        case "EDIT_ACTIVE_SMURF":
          return {
            smurfs: [action.payload],
            activeSmurf: null
          }
        default:
            return state;
    }
}