import { DatabaseConnectionFactory, DatabaseQueryFactory, DatabaseResultFactory } from "./abstract/IDbFactory";
import { DatabaseQuery, DatabaseResult } from "./abstract/IDbProductFactory";
import { Db2ConnectionFactory, Db2QueryFactory, Db2ResultFactory } from "./concrete/Db2Factory";
import { MsSqlConnectionFactory, MsSqlQueryFactory, MsSqlResultFactory } from "./concrete/MssqlFactory";
export enum DbEnum { mssql, db2 }

class DatabaseFactory {
    connectionFactory: DatabaseConnectionFactory;
    queryFactory: DatabaseQueryFactory;
    resultFactory: DatabaseResultFactory;

    constructor(dbType: DbEnum) {
        switch (dbType) {
            case DbEnum.mssql:
                this.connectionFactory = new MsSqlConnectionFactory();
                this.queryFactory = new MsSqlQueryFactory();
                this.resultFactory = new MsSqlResultFactory();
                break;
            case DbEnum.db2:
                this.connectionFactory = new Db2ConnectionFactory();
                this.queryFactory = new Db2QueryFactory();
                this.resultFactory = new Db2ResultFactory();
                break;
            default:
                throw new Error("Invalid Database Type.");
        }
    }

    connectToDatabase(): void {
        const connectionFactory = this.connectionFactory;
        const connection = connectionFactory.createConnection();
        connection.connect();
    }

    createQuery(): DatabaseQuery {
        return this.queryFactory.createQuery();
    }

    createResult(): DatabaseResult {
        return this.resultFactory.createResult();
    }
}

export default DatabaseFactory;