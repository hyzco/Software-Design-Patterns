import { DatabaseConnectionFactory, DatabaseQueryFactory, DatabaseResultFactory } from "../abstract/IDbFactory";
import { DatabaseConnection, DatabaseQuery, DatabaseResult } from "../abstract/IDbProductFactory";
import { Db2Connection, Db2Query, Db2Result } from "./Db2";

// Concrete factory for Db2
export class Db2ConnectionFactory implements DatabaseConnectionFactory {
    createConnection(): DatabaseConnection {
        return new Db2Connection();
    }
}

export class Db2QueryFactory implements DatabaseQueryFactory {
    createQuery(): DatabaseQuery {
        return new Db2Query();
    }
}

export class Db2ResultFactory implements DatabaseResultFactory {
    createResult(): DatabaseResult {
        return new Db2Result();
    }
}
