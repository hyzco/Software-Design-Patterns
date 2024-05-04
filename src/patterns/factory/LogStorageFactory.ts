import { Environments } from "../../../main";
import { ILogStorage } from "./ILogStorage";
import CloudLogger from "./loggers/CloudLogger";
import DbLogger from "./loggers/DbLogger";
import FileLogger from "./loggers/FileLogger";

export default class LogStorageFactory {
    logger:ILogStorage;

    constructor(env: Environments){
       if(env === Environments.development){
        this.logger = new CloudLogger().createLogger();
       }
       
       if(env === Environments.test){
        this.logger = new FileLogger().createLogger();
       }

       if(env === Environments.production){
        this.logger = new DbLogger().createLogger();
       }
    }
}