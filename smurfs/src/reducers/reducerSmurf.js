import {
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILED,
    FETCH_DATA,
    SUCCESS,
    FAILURE
} from '../actions/Actions'

const initialState = {
    smurfs: [],
    // fetchingSmurfs: false,
    addingSmurf: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        // case ADD_SMURF: {
        //     return {
        //         ...state,
        //         // fetchingSmurfs: true
        //     }
        // }
        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                // fetchingSmurfs: false,
                smurfs: action.payload
            }
        }
        case ADD_SMURF_FAILED: {
            return {
                ...state,
                // fetchingSmurfs: false,
                error: action.payload
            }
        }
        case FETCH_DATA: {
            return {
                ...state,
                // fetchingSmurfs: true,
                error: action.payload
            }
        }
        case SUCCESS: {
            return {
                ...state,
                // fetchingSmurfs: false,
                error: action.payload,
                smurfs: action.payload
            }
        }
        case FAILURE: {
            return {
                ...state,
                // fetchingSmurfs: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}