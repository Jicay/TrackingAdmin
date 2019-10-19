import {BACK_URL} from "../config";

export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';
export const REQUEST_SESSIONS = 'REQUEST_SESSIONS';

export const receiveSessions= (json) => ({
    type: RECEIVE_SESSIONS,
    sessions: json,
});

export const requestLocation = () => ({
    type: REQUEST_SESSIONS,
});

const shouldFetchSessions = (state) => {
    const sessions = state.sessions;
    if (!sessions) {
        return true
    }
    return !sessions.isFetching;

}

export const fetchSessionsIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchSessions(getState())) {
        return dispatch(fetchSessions())
    }
}

const fetchSessions = () => dispatch => {
    dispatch(requestLocation())
    return fetch(BACK_URL + `/sessions`)
        .then(response => response.json())
        .then(json => {dispatch(receiveSessions(json))})
}


