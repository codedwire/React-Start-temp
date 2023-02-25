import './App.css';
import React from "react";
import Application from "./views/index";
import Config from './config'
import * as Atom from './components/atom';
const App = () => (Config.env === 'DEV' || Config.env === 'PROD') ? <Application /> : <Atom.ContactAdmin />
export default App;
