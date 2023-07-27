import { Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dto/create-pokemon';
import { TypeOrmMethods_Create } from '@app/libs/typeorm/create.orm';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { TypeOrmMethods_Find } from '@app/libs/typeorm/find.orm';
import { ServiceOptions } from '@app/libs/typeorm/serviceOptions.interfaces';

@Injectable()
export class PokemonService {

   options: ServiceOptions = {
    repository: this.pokemonRepository,
    table: 'locations',
    filterSetter: [
      { keyName: 'id', type: 'number' },
      { keyName: 'address', type: 'string', relation: "translations" },
    ],
    limit: 10,
    page: 0,
    orderKey: 'id',
    orderValue: 'desc',
    filter: {},
    withDeleted: false,
  };

  constructor(
    @InjectRepository(PokemonEntity)
    private pokemonRepository: Repository<PokemonEntity>,
  ) {

   
  }
  async create(createPokemonDto: CreatePokemonDTO) {
    const qBuilder = new TypeOrmMethods_Create(this.pokemonRepository);

    // call create structure
    const newRecord = await qBuilder.addNew(createPokemonDto, CreatePokemonDTO);

    const addedRecord = await this.findOne(newRecord['id']);

    // return success response
    return ApiResponseMsg.successResponse('saved successfully', addedRecord);
  }

  async findAll() {
    const qBuilder = new TypeOrmMethods_Find(this.pokemonRepository,this.options);
    // qBuilder.FindAllPagination()
    return this.pokemonRepository.find();
  }

  async findOne(id: number) {
    // return this.pokemonRepository.findOne(id);
  }

  // async update(id: number, updatePokemonDto: UpdatePokemonDto) {
  //   const pokemon = await this.pokemonRepository.findOne(id);
  //   if (!pokemon) {
  //     throw new Error('Pokemon not found');
  //   }

  //   this.pokemonRepository.merge(pokemon, updatePokemonDto);
  //   return this.pokemonRepository.save(pokemon);
  // }

  // async remove(id: number) {
  //   await this.pokemonRepository.delete(id);
  // }
}
