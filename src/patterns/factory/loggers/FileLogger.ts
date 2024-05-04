import { EStorageType, ILogStorage } from "../ILogStorage";
import Logger from "../Logger";

export default class FileLogger implements Logger{
    storageType: EStorageType = EStorageType.file;
    createLogger(): ILogStorage {
        console.log("FileLogger is initiated here.");
        return this;
    }
 
    log(log: string): void {
        console.log("[FileLogger] " + log)
    }
}