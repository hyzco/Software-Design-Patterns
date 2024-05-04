import { ILogStorage, EStorageType } from "../ILogStorage";

export default class DevelopmentLog implements ILogStorage {
    storageType: EStorageType;
    log: (log: string) => void;
}