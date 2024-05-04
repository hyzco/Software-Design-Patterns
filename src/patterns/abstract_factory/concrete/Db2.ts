import { DatabaseConnection, DatabaseQuery, DatabaseResult } from "../abstract/IDbProductFactory";

// Concrete product classes for Db2
export class Db2Connection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to Db2 database...");
    }
}

export class Db2Query implements DatabaseQuery {
    execute(query: string): void {
        console.log(`Executing Db2 query: ${query}`);
    }
}

export class Db2Result implements DatabaseResult {
    getResult(): any {
        console.log("Fetching Db2 result...");
        // Simulated Db2 result
        return { data: "Db2 result data" };
    }
}