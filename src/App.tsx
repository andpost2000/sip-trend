import * as React from "react";

import "./App.scss";

import Page from "./components/page-layout";

class App extends React.Component {
  public name: string = "andpost";
  public render() {
    return <Page msg={this.name} />;
  }
}

export default App;
