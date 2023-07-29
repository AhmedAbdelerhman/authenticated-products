import { CreatePokemonDTO } from './dto/create-pokemon';
import { PokemonEntity } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { ServiceOptions } from '@app/libs/typeorm/serviceOptions.interfaces';
import { UpdatePokemonDTO } from './dto/update-pokemon';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
export declare class PokemonService {
    private pokemonRepository;
    _options: ServiceOptions;
    constructor(pokemonRepository: Repository<PokemonEntity>);
    create(createPokemonDto: CreatePokemonDTO): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    findAll(options: PageOptionsDto, filter: any): Promise<{
        status: number;
        message: string;
        meta: any;
        data: any;
    }>;
    findOne(id: number): Promise<any>;
    getSingleRecord(id: number): Promise<void | {
        status: number;
        message: string;
        data: any;
    }>;
    update(id: number, updatePokemonDto: UpdatePokemonDTO): Promise<void | {
        status: number;
        message: string;
        data: any;
    }>;
    remove(id: number): Promise<void | {
        status: number;
        message: string;
        data: any;
    }>;
}
