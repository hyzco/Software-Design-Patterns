import ILogStorage, { Environments } from "./ILogStorage";
import CloudLogger from "./loggers/CloudLogger";
import DbLogger from "./loggers/DbLogger";
import FileLogger from "./loggers/FileLogger";

export default class LogStorageFactory {
    static createLogger(env: Environments): ILogStorage {
        switch (env) {
            case Environments.development:
                return new CloudLogger();
            case Environments.test:
                return new FileLogger();
            case Environments.production:
                return new DbLogger();
            default:
                throw new Error("Invalid environment");
        }
    }
}