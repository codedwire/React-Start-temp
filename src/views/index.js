/*
* Views are screens to show on user interface
* all init functions are initiated here
* @Author STRUCTLOOPER
* */
import React from 'react';
import {Helmet} from 'react-helmet';
import {getStateFromSelector} from "../Redux/store";
import {CURRENT_SESSION_STATE_REDUCER} from "../Redux/reducers";

const Application = () => {
    const {pageTitle, pageName} = getStateFromSelector(CURRENT_SESSION_STATE_REDUCER);
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <h1>This is {pageName}</h1>
        </>
    );
};

export default Application;