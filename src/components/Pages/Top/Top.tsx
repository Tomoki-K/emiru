import * as React from 'react';
import { EmiruForm } from '../../Organisms/EmiruForm';

interface TopState {
  text: string;
}

export class Top extends React.Component<TopState> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  public render() {
    return(
      <>
        <h1>えみるがシャウトするのです</h1>
        <EmiruForm/>
      </>
    );
  }
}
