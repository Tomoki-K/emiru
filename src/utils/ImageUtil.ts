import * as Canvas from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import LoggerUtil from './LoggerUtil';

export const ImageTextGenerator = (sourceImagePath: string, outImagePath: string, text: string) => {
  Canvas.registerFont(assetPath('MPLUS1p-Black.ttf'), { family: 'MPLUS1p' });

  // create canvas and draw image
  const image = new Canvas.Image();
  image.onerror = (err) => { LoggerUtil.error(err); };
  image.onload = () => {
    const canvas = Canvas.createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // draw text
    ctx.font = '150px MPLUS1p';
    ctx.fillStyle = '#ffffff';
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (image.width - textWidth) / 2, image.height / 2);

    // save as jpeg
    canvas.createJPEGStream().pipe(fs.createWriteStream(assetPath(outImagePath)));
  };
  image.src = assetPath(sourceImagePath);
};

const assetPath = (filename) => {
  const assetRoot = '../../public/assets/';
  return path.resolve(__dirname, `${assetRoot}${filename}`);
};
