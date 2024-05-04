import { DatabaseConnection, DatabaseQuery, DatabaseResult } from "../abstract/IDbProductFactory";

// Concrete product classes for MsSql
export class MsSqlConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to MsSql database...");
    }
}

export class MsSqlQuery implements DatabaseQuery {
    execute(query: string): void {
        console.log(`Executing MsSql query: ${query}`);
    }
}

export class MsSqlResult implements DatabaseResult {
    getResult(): any {
        console.log("Fetching MsSql result...");
        // Simulated MsSql result
        return { data: "MsSql result data" };
    }
}