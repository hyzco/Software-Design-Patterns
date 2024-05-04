import ILogStorage, { LogStorageType, LogFunction } from "./ILogStorage";

export default abstract class AbstractLogger implements ILogStorage {
    storageType: LogStorageType;
    log: LogFunction
}
