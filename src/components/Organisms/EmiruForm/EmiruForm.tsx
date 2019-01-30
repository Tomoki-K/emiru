import * as React from 'react';
import { Button } from '../../Atoms/Button';
import { TextArea } from '../../Atoms/TextArea';
import { TextOnImage } from '../../Molecules/TextOnImage';

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
    // tslint:disable-next-line:no-console
    console.log(this.state.text);
  }

  public render() {
    const { className } = this.props;
    return (
      <>
        <TextOnImage
          text={this.state.text}
          title="emiru_bg"
          filename="emiru.jpeg"
          className="EmiruFormPreview"
        />
        <form id="EmiruForm" className={className}>
          <p className="EmiruFromDescription">あなたのこころの叫び：</p>
          <TextArea
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="何か言うのです"
            className="EmiruFormTextarea"
            autoGrow={true}
          />
          <Button
            onClick={this.handleFormSubmit}
            className="EmiruFormButton SubmitButton"
          >
            <span>シャウトする (ツイート)</span>
          </Button>
          {/* <Button
            onClick={this.handleFormSubmit}
            className="EmiruFormButton DownloadButton"
          >
            <span>アルバムに保存する</span>
          </Button> */}
        </form>
      </>
    );
  }
}
