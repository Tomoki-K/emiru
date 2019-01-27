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
        <h1 className="TopTitle">えみるがシャウトするのです</h1>
        <h2 className="TopSubtitle">愛崎えみるがあなたの心の叫びを代弁してくれます</h2>
        <EmiruForm/>
      </>
    );
  }
}
