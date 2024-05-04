import LogStorageFactory from "./src/patterns/factory/LogStorageFactory";

export enum Environments {
    development, test, production
}

class Main {
    constructor(){
        const logFactory = new LogStorageFactory(Environments.development);
        const logger = logFactory.logger;
        logger.log("test");
        logger.log(logger.storageType)
    }
}

new Main();