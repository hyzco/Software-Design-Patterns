import { LogFunction, LogStorageType } from "../ILogStorage";
import AbstractLogger from "../AbstractLogger";

export default class CloudLogger implements AbstractLogger {
    storageType: LogStorageType = LogStorageType.cloud;
    log: LogFunction = (...log: any[]): void => {
        console.log("[CloudLogger]", ...log);
    }
}