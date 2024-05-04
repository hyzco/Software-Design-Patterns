import { LogFunction, LogStorageType } from "../ILogStorage";
import AbstractLogger from "../AbstractLogger";

export default class FileLogger extends AbstractLogger {
    storageType: LogStorageType = LogStorageType.file;
    log: LogFunction = (...log: any[]): void => {
        console.log("[FileLogger] " + log);
    }
}
