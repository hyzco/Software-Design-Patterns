import { EStorageType, ILogStorage } from "../ILogStorage";
import Logger from "../Logger";

export default class DbLogger implements Logger {
    storageType: EStorageType = EStorageType.db;

    createLogger(): ILogStorage {
        console.log("Database logger is initiated here.");
        return this;
    }

    log(log: string): void {
        console.log("[DbLogger] " + log)
    }
}