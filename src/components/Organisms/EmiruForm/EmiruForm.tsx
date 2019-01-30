import axios from 'axios';
import * as React from 'react';

import { Button } from '../../Atoms/Button';
import { TextArea } from '../../Atoms/TextArea';
import { TextOnImage } from '../../Molecules/TextOnImage';

import { ImagePayload } from '../../../payloads/ImagePayload';

import routePaths from '../../../Routes/routePaths';

type Status = 'STANDBY' | 'SENDING' | 'DOWNLOAD_SUCCESS' | 'FAILURE';
const StatusMessage: {[x in Status]: string} = {
  STANDBY: '',
  SENDING: '作成中...',
  DOWNLOAD_SUCCESS: 'まもなくダウンロードが開始します',
  FAILURE: '問題が発生しました',
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
      text: '',
      status: 'STANDBY',
    };
  }

  public handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: e.currentTarget.value });
  }

  public saveBase64Image = (base64Data: string, name: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = base64Data.replace('image/png', 'image/octet-stream');
    link.click();
  }

  public handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.state.text.length === 0) { return; }
    this.setState({ status: 'SENDING' });
    axios.get<ImagePayload>(
      routePaths.API_IMAGE, {
        params: {
          text: this.state.text,
        },
      },
    ).then(({ data }) => {
      this.setState({ status: 'DOWNLOAD_SUCCESS' });
      this.saveBase64Image(data.image, `emiru_${Date.now()}.png`);
    }).catch((err) => {
      this.setState({ status: 'FAILURE' });
    });
  }

  public render() {
    const { className } = this.props;
    return (
      <>
        <TextOnImage
          text={this.state.text || 'ギュイーンとソウルが\nシャウトするのです'}
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
            onClick={this.handleDownload}
            className="EmiruFormButton DownloadButton"
            disabled={!this.state.text.replace(/\s/g, '').length}
          >
            <span>アルバムに保存する</span>
          </Button>
          <Button
            onClick={() => 0}
            className="EmiruFormButton SubmitButton"
            disabled={true}
          >
            <span>シャウトする (準備中)</span>
          </Button>
          <p className={['EmiruFormStatusMessage', this.state.status.toLowerCase()].join(' ')}>
            {StatusMessage[this.state.status]}
          </p>
        </form>
      </>
    );
  }
}
