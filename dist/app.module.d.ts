import { SeedService } from './seed.service';
import { Connection } from 'typeorm';
export declare class AppModule {
    private connection;
    private seedService;
    constructor(connection: Connection, seedService: SeedService);
    seedData(): Promise<void>;
}
