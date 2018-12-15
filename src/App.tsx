import * as React from 'react';
import { Provider } from 'react-redux';

import Page from './components/page-layout';
import store from './store';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App;
