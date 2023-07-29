import { CreatePokemonDTO } from './dto/create-pokemon';
import { PokemonService } from './pokemon.service';
import { UpdatePokemonDTO } from './dto/update-pokemon';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDTO): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    findAll(pageOptionsDto: PageOptionsDto, filterPokemonDto?: FilterPokemonDto): Promise<{
        status: number;
        message: string;
        meta: any;
        data: any;
    }>;
    findOne(id: number): Promise<void | {
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
