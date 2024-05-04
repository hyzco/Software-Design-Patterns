import { LogFunction, LogStorageType } from "../ILogStorage";
import AbstractLogger from "../AbstractLogger";

export default class DbLogger implements AbstractLogger {
    storageType: LogStorageType = LogStorageType.db;
    log: LogFunction = (...log: any[]): void => {
        console.log("[CloudLogger]", ...log);
    }
}