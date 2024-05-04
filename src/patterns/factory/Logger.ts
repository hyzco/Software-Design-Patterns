import { EStorageType, ILogStorage } from "./ILogStorage";

export default abstract class AbstractLogger {
    abstract storageType: EStorageType
    abstract createLogger(): ILogStorage
    abstract log(log:string): void
}