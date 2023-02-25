import Config from '../config'
import {SET_CURRENT_PAGE_TITLE,SET_CURRENT_PAGE} from "./actionType";

const currentSessionState = {
    pageName: Config.appName,
    pageTitle: Config.title,
};

export function currentSessionStateReducer(state = currentSessionState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...state, pageName: action.payload};
        case SET_CURRENT_PAGE_TITLE:
            return {...state, pageTitle: action.payload};
        default:
            return state;
    }
}
export const CURRENT_SESSION_STATE_REDUCER = "currentSessionStateReducer";

