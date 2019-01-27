import * as React from 'react';
import { Image } from '../../Atoms/Image';

interface TextOnImageProps {
  text: string;
  title: string;
  filename: string;
  className?: string;
}

export const TextOnImage: React.StatelessComponent<TextOnImageProps> = (props) => {
  const { text, title, filename, className } = props;

  // dynamic font size, based on parent div width. (default: 50px)
  const fontSize = this.container ? this.container.offsetWidth * 0.07 : 50;

  return(
    <div className={`TextOnImage ${className}Image`}>
      <p
        className={`TextOnImageText ${className}Text`}
        style={{ fontSize }}
      >
      {text}
      </p>
      <div ref={(container) => { this.container = container; }}>
        <Image
          title={title}
          filename={filename}
          className={`TextOnImageImage ${className}Image`}
        />
      </div>
    </div>
  );
};
