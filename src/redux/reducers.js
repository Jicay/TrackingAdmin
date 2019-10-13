import {combineReducers} from 'redux';
import {RECEIVE_SESSIONS, REQUEST_SESSIONS} from "./action";

function sessions(state = {}, action) {
    switch (action.type) {
        case REQUEST_SESSIONS:
        case RECEIVE_SESSIONS:
            return {
                ...state,
                ...sessionsDetail(state.sessions, action)
            };
        default:
            return state
    }
}

function sessionsDetail(state = {isFetching: false, sessions: []}, action) {
    switch (action.type) {
        case REQUEST_SESSIONS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_SESSIONS:
            return {
                ...state,
                isFetching: false,
                sessions: action.sessions,
            }
        default:
            return state
    }
}

export default combineReducers({sessions});