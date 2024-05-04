import { Environments } from "./src/patterns/factory/ILogStorage";
import LogStorageFactory from "./src/patterns/factory/LogStorageFactory";

class FactoryPattern {
    constructor(){
        const logger = LogStorageFactory.createLogger(Environments.production);
        logger.log("TEST LOG");
        logger.log("[Logger Storage Type]:",logger.storageType);
    }
}

new FactoryPattern();