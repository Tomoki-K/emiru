import * as React from 'react';
import config from '../../../config';

interface ImageProps {
  filename: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
}

const IMAGE_PATH = `${config.DOMAIN_URL}/assets/images`;

export const Image: React.StatelessComponent<ImageProps> = (props) => {
  const { filename, title, width, height, className } = props;

  return(
    <img
      src={`${IMAGE_PATH}/${filename}`}
      title={`${title} image`}
      alt={title}
      width={width}
      height={height}
      className={['image', className].join(' ')}
    />
  );
};
