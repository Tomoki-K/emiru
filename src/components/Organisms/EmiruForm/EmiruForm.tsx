import * as React from 'react';
import { Button } from '../../Atoms/Button';
import { Image } from '../../Atoms/Image';
import { TextArea } from '../../Atoms/TextArea';

type Status = 'STANDBY' | 'SENDING' | 'SUCCESS' | 'FAILURE';
const StatusMessage: {[x in Status]: string} = {
  STANDBY: '',
  SENDING: 'Sending...',
  SUCCESS: 'Your message has been sent!',
  FAILURE: 'Oops, something went wrong',
};

interface EmiruFormProps {
  className?: string;
}

interface EmiruFormState {
  text: string;
  status: Status;
}

export class EmiruForm extends React.Component<EmiruFormProps, EmiruFormState> {
  constructor(props) {
    super(props);
    this.state = {
      text: 'ギュイーンとソウルが\nシャウトするのです',
      status: 'STANDBY',
    };
  }

  public handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.currentTarget.value });
  }

  public handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.state.text.length === 0) { return; }
    console.log(this.state.text);
  }

  public render() {
    return (
      <>
        <form>
          <TextArea
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="何か言うのです"
            className="EmiruFormTextarea"
          />
          <Button
            onClick={this.handleFormSubmit}
            className="EmiruFormSubmitButton"
          >
            <span>シャウトする</span>
          </Button>
        </form>
        <p>{this.state.text}</p>
        <Image
          title="emiru_bg"
          fileName="emiru.jpeg"
        />
      </>
    );
  }
}
