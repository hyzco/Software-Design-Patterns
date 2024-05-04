import DatabaseFactory, { DbEnum } from "./src/patterns/abstract_factory/DatabaseFactory";
import ILogStorage, { Environments } from "./src/patterns/factory/ILogStorage";
import LogStorageFactory from "./src/patterns/factory/LogStorageFactory";

class FactoryPattern {
    logger: ILogStorage;
    databaseFactory: DatabaseFactory;
    constructor() {
        this.logger = LogStorageFactory.createLogger(Environments.production);
        this.logger.log("TEST LOG");
        this.logger.log("[Logger Storage Type]:", this.logger.storageType);

        this.databaseFactory = new DatabaseFactory(DbEnum.mssql);
        this.databaseFactory.connectToDatabase();

        const databaseQuery = this.databaseFactory.createQuery();
        const databaseResult = this.databaseFactory.createResult();

        databaseQuery.execute("SOME SQL QUERY");
        databaseResult.getResult();
    }
}

new FactoryPattern();