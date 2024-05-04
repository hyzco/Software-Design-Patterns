import { ILogStorage, EStorageType } from "../ILogStorage";

export default class TestLog implements ILogStorage {
    storageType: EStorageType;
    log: (log: string) => void;
}