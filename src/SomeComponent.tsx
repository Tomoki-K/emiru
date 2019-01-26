import * as React from 'react';

export interface SomeComponentProps {
  text?: Text;
}
export class SomeComponent extends React.Component<SomeComponentProps, {}> {
  public render() {
    return (
      <h1>{this.props.text || 'SomeComponent'}</h1>
    );
  }
}
