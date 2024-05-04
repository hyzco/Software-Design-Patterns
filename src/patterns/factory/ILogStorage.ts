export enum EStorageType {
    file = "file", db = "db", cloud = "cloud"
};

export interface ILogStorage {
    storageType: EStorageType,
    log: (log: string) => void,
}