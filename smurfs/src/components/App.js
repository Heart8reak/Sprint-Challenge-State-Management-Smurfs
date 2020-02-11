import React, { Component } from "react";
import "./App.css";

import SmurfListView from './SmurfListView'
import Form from './Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <SmurfListView />
      </div>
    );
  }
}

export default App;
