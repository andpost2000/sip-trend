import * as React from "react";

import "./index.scss";

interface InProps {
  msg: string;
}

class Page extends React.Component<InProps> {
  public name: string = "andpost";
  public render() {
    return (
      <div className="page">
        <header className="page__header">
          {/* <img src={logo} className="page-logo" alt="logo" /> */}
          <h1 className="page__title">Welcome {this.props.msg} to React</h1>
        </header>
        <main className="page__main">
          {this.name} To get started, <code>src/page.tsx</code> and save to
          reload.
        </main>
        <footer className="page__footer">Footer</footer>
      </div>
    );
  }
}

export default Page;
