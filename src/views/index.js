/*
* Views are screens to show on user interface
* all init functions are initiated here
* @Author STRUCTLOOPER
* */
import React from 'react';
import {Helmet} from 'react-helmet';
import {getStateFromSelector} from "../redux/store";
import {CURRENT_SESSION_STATE_REDUCER} from "../redux/reducers";
// import {setCurrentPageTitle} from "../redux/action";
// import {useDispatch} from "react-redux";

const Application = () => {
    // const ds = useDispatch()
    const {pageTitle, pageName} = getStateFromSelector(CURRENT_SESSION_STATE_REDUCER);
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <h1>This is {pageName}</h1>
            {/*<button title={"Click me"} onClick={()=>ds(setCurrentPageTitle("CHKCINF"))}>*/}
            {/*    <h4>Click me</h4>*/}
            {/*</button>*/}
        </>
    );
};

export default Application;