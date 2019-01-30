import { ImageTextGenerator } from '../utils/ImageUtil';

export class ImageController {
  public static async generateEmiruImage(text: string) {
    return await ImageTextGenerator('images/emiru.jpeg', 'tmp/test.jpeg', text);
  }
}
