// Abstract product interfaces
export interface DatabaseConnection {
    connect(): void;
}

export interface DatabaseQuery {
    execute(query: string): void;
}

export interface DatabaseResult {
    getResult(): any;
}