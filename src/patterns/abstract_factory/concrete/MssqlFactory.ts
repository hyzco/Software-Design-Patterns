import { DatabaseConnectionFactory, DatabaseQueryFactory, DatabaseResultFactory } from "../abstract/IDbFactory";
import { DatabaseConnection, DatabaseQuery, DatabaseResult } from "../abstract/IDbProductFactory";
import { MsSqlConnection, MsSqlQuery, MsSqlResult } from "./Mssql";

// Concrete factory for MsSql
export class MsSqlConnectionFactory implements DatabaseConnectionFactory {
    createConnection(): DatabaseConnection {
        return new MsSqlConnection();
    }
}

export class MsSqlQueryFactory implements DatabaseQueryFactory {
    createQuery(): DatabaseQuery {
        return new MsSqlQuery();
    }
}

export class MsSqlResultFactory implements DatabaseResultFactory {
    createResult(): DatabaseResult {
        return new MsSqlResult();
    }
}
