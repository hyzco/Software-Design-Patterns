import { EStorageType, ILogStorage } from "../ILogStorage";
import Logger from "../Logger";

export default class CloudLogger implements Logger{
    storageType:EStorageType = EStorageType.cloud;
    createLogger(): ILogStorage {
        console.log("CloudLogger is initiated here.");
        return this;
    }
    log(log: string): void {
        console.log("[CloudLogger] " + log)
    }
}