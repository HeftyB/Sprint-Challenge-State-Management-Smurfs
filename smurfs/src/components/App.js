import React, { Component } from "react";
import AddSmurf from "./AddSmurf";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <AddSmurf/>
        </div>
      </div>
    );
  }
}

export default App;
