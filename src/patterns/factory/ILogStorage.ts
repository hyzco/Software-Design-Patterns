export enum LogStorageType {
    file = "file", db = "db", cloud = "cloud"
};

export enum Environments {
    development = "development",
    test = "test",
    production = "production"
}

export interface LogInterface {
    LogFunction: <T extends any[]>(...log: T) => void;
}

export type LogFunction = <T extends any[]>(...log: T) => void;

export interface ILogStorage {
    storageType: LogStorageType,
    log: LogFunction
}