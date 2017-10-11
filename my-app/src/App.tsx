import * as React from 'react';
import './App.css';
import { observer } from "mobx-react";

const logo = require('./logo.svg');
export interface Store {
    todoList: any
}
export interface AppProps {
    store: Store
}
@observer
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.store.todoList[0]}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
