type LogType = 'LOG' | 'ERROR' | 'INFO';
import { formatDate } from './DateUtil';

export default class LoggerUtil {
  // normal logs
  public static log = (text: string) => {
    LoggerUtil.messageConstructor('LOG', text);
  }

  // errors and alerts
  public static error = (text: string) => {
    LoggerUtil.messageConstructor('ERROR', text);
  }

  // other stuff
  public static info = (text: string) => {
    LoggerUtil.messageConstructor('INFO', text);
  }

  private static messageConstructor = (type: LogType, text: string) => {
    const now = formatDate();
    // tslint:disable-next-line:no-console
    console.log(`>>> ${now} [${type}] ${text}`);
  }
}
