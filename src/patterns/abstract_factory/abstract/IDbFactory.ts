// Abstract factory interfaces
import { DatabaseConnection, DatabaseQuery, DatabaseResult } from "./IDbProductFactory";

export interface DatabaseConnectionFactory {
    createConnection(): DatabaseConnection;
}

export interface DatabaseQueryFactory {
    createQuery(): DatabaseQuery;
}

export interface DatabaseResultFactory {
    createResult(): DatabaseResult;
}