import * as Canvas from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import LoggerUtil from './LoggerUtil';

interface TextConfig {
  size: number;
  lineHeight: number;
  offsetX: number;
  offsetY: number;
}

const renderDot = (context: any, x: number, y: number) => {
  context.fillStyle = '#ff0000'; // red
  context.beginPath();
  context.arc(x, y, 5, 0, Math.PI * 2, false);
  context.fill();
  context.fillStyle = '#ffffff';
};

const renderText = (context: any, text: string, config: TextConfig) => {
  context.beginPath() ;
  text.split('\n').forEach((line, i) => {
    const lineIdx = i - 1;
    let lineOffset = config.size ;
    if (lineIdx) { lineOffset += config.size * config.lineHeight * lineIdx ; }
    context.fillText(line, config.offsetX, config.offsetY + lineOffset) ;
  });
};

export const ImageTextGenerator = (sourceImagePath: string, outImagePath: string, text: string) => {
  return new Promise((resolve, reject) => {
    Canvas.registerFont(assetPath('MPLUS1p-Black.ttf'), { family: 'MPLUS1p' });
  // create canvas and draw image
    const image = new Canvas.Image();
    image.onerror = (err) => { LoggerUtil.error(err); };
    image.onload = resolve(image);
    image.src = assetPath(sourceImagePath);
  }).then((image: any) => {
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
    const textOffsetY = (image.height / 2) - lineCount * fontSize * 0.5; // vertical center
    const config: TextConfig = {
      size: fontSize,
      lineHeight: 1,
      offsetX: textOffsetX,
      offsetY: textOffsetY,
    };
    renderText(ctx, text, config);
    return canvas;
  }).then((canvas) => {
    return canvas.toDataURL('base64');
    // save as jpeg
    // canvas.createJPEGStream().pipe(fs.createWriteStream(assetPath(outImagePath)));
  });
};

const assetPath = (filename) => {
  const assetRoot = '../../public/assets/';
  return path.resolve(__dirname, `${assetRoot}${filename}`);
};
