import { Connection, Repository } from 'typeorm';
import { PokemonEntity } from './pokemon/entities/pokemon.entity';
export declare class SeedService {
    private connection;
    private pokemonRepository;
    constructor(connection: Connection, pokemonRepository: Repository<PokemonEntity>);
    seedFromExcel(filePath: string): Promise<void>;
}
