import { ILogStorage, EStorageType } from "../ILogStorage";

export default class ProductionLog implements ILogStorage {
    storageType: EStorageType;
    log: (log: string) => void;
}