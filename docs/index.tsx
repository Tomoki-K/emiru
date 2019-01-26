import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SomeComponent } from '../src';

class App extends React.Component {
  public render() {
    return(
      <SomeComponent/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
