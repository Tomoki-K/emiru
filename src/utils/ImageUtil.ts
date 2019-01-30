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
    const fontSize = 140;
    ctx.font = `${fontSize}px MPLUS1p`;
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = 'middle';
    const metric = ctx.measureText(text);
    const textWidth = metric.width;
    const textOffsetX = (image.width - textWidth) / 2; // horizontal center
    const lineCount = (text.match(/\n/g) || []).length;
    const textOffsetY = (image.height / 2) - lineCount * fontSize * 0.6;
    // // testing
    // ctx.beginPath();
    // ctx.arc(textOffsetX, textOffsetY, 5, 0, Math.PI * 2, false);
    // ctx.fillStyle = '#ff0000';
    // ctx.fill();
    // ctx.fillStyle = '#ffffff';
    // // /testing
    ctx.fillText(text, textOffsetX, textOffsetY);

    // save as jpeg
    canvas.createJPEGStream().pipe(fs.createWriteStream(assetPath(outImagePath)));
  };
  image.src = assetPath(sourceImagePath);
};

const assetPath = (filename) => {
  const assetRoot = '../../public/assets/';
  return path.resolve(__dirname, `${assetRoot}${filename}`);
};
