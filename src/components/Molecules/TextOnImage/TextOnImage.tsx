import * as React from 'react';
import { Image } from '../../Atoms/Image';

interface TextOnImageProps {
  text: string;
  title: string;
  filename: string;
  className?: string;
}

interface TextOnImageStates {
  fontSize: number;
}

export class TextOnImage extends React.Component<TextOnImageProps, TextOnImageStates> {
  private ImageContainer = React.createRef<HTMLDivElement>();
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 0,
    };
  }

  public componentDidMount() {
    this.setFontSize(); // set font size on mount
    window.addEventListener('resize', this.setFontSize);
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.setFontSize);
  }

  public render() {
    const { text, title, filename, className } = this.props;

    return(
      <div className={`TextOnImage ${className}Image`}>
        <p
          className={`TextOnImageText ${className}Text`}
          style={{ fontSize: this.state.fontSize }}
        >
        {text}
        </p>
        <div ref={this.ImageContainer}>
          <Image
            title={title}
            filename={filename}
            className={`TextOnImageImage ${className}Image`}
          />
        </div>
      </div>
    );
  }

  private setFontSize = () => {
    // dynamic font size, based on parent div width. (default: 50px)
    const container = this.ImageContainer;
    const fontSize = container!.current ? container.current.offsetWidth * 0.07 : 50;
    this.setState({ fontSize });
  }
}
