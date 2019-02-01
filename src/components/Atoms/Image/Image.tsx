import * as React from 'react';
import config from '../../../config';

interface ImageProps {
  title: string;
  filename?: string;
  src?: string;
  guard?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const IMAGE_PATH = `${config.DOMAIN_URL}/assets/images`;

export const Image: React.StatelessComponent<ImageProps> = (props) => {
  const { title, filename, src, guard, width, height, className } = props;

  return(
    <div className={guard ? 'guardedImageWrapper' : 'imageWrapper'}>
      <img
        src={src || `${IMAGE_PATH}/${filename}`}
        title={`${title}`}
        alt={title}
        width={width}
        height={height}
        className={['image', className].join(' ')}
      />
    </div>
  );
};
