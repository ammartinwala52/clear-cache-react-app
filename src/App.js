import React from "react";
import logo from "./logo.svg";
import "./App.css";
import packageJson from "../package.json";
import { getBuildDate } from "./utils/utils";
import withClearCache from "./ClearCache";

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Build date: {getBuildDate(packageJson.buildDate)}</p>
      </header>
    </div>
  );
}

export default App;
