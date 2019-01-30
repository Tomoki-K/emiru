import { ImageTextGenerator } from '../utils/ImageUtil';

export class ImageController {
  public static generateEmiruImage(text: string) {
    ImageTextGenerator('images/emiru.jpeg', 'tmp/test.jpeg', text);
  }
}
