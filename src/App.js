import './App.css';
import React from "react";
import BootApp from "./views/index";
import Config from './config'
import _ from "lodash";
function App() {
  return (
      <>
        {(Config.env === 'DEV' || Config.env === 'PROD') && <BootApp />}
        {_.isUndefined(Config.env) && <h1>ENV IS NOT SETUP, CONTACT ADMIN</h1>}
      </>
  );
}
export default App;
