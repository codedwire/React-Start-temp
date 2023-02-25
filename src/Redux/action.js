import {SET_CURRENT_PAGE, SET_CURRENT_PAGE_TITLE} from './actionType'

export const setCurrentPageName = val => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: val,
    });
};
export const setCurrentPageTitle = val => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE_TITLE,
        payload: val,
    });
};