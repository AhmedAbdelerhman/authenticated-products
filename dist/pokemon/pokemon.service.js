"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const create_pokemon_1 = require("./dto/create-pokemon");
const create_orm_1 = require("../libs/typeorm/create.orm");
const typeorm_1 = require("@nestjs/typeorm");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const typeorm_2 = require("typeorm");
const api_response_msg_1 = require("../libs/errors/api-response-msg");
const find_orm_1 = require("../libs/typeorm/find.orm");
const delete_orm_1 = require("../libs/typeorm/delete.orm");
const update_orm_1 = require("../libs/typeorm/update.orm");
let PokemonService = class PokemonService {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
        this._options = {
            repository: this.pokemonRepository,
            limit: 10,
            page: 1,
            orderKey: 'id',
            orderValue: 'desc',
            filter: {},
            withDeleted: false,
        };
    }
    async create(createPokemonDto) {
        const qBuilder = new create_orm_1.TypeOrmMethods_Create(this.pokemonRepository);
        const newRecord = await qBuilder.addNew(createPokemonDto, create_pokemon_1.CreatePokemonDTO);
        const addedRecord = await this.findOne(newRecord['id']);
        return api_response_msg_1.ApiResponseMsg.successResponse('saved successfully', addedRecord);
    }
    async findAll(options, filter) {
        Object.assign(this._options, options);
        const qBuilder = new find_orm_1.TypeOrmMethods_Find(this.pokemonRepository, this._options);
        const records = await qBuilder.FindAllPagination(filter);
        return api_response_msg_1.ApiResponseMsg.successResponseWithPagination('succuss', records);
    }
    async findOne(id) {
        const qBuilder = new find_orm_1.TypeOrmMethods_Find(this.pokemonRepository, this._options);
        return qBuilder.FindOneBy({
            where: {
                id,
            },
        });
    }
    async getSingleRecord(id) {
        const pokemon = await this.findOne(id);
        if (!pokemon) {
            return api_response_msg_1.ApiResponseMsg.notFoundResponse(`element with id = ${id} not found`);
        }
        return api_response_msg_1.ApiResponseMsg.successResponse(pokemon);
    }
    async update(id, updatePokemonDto) {
        const existPokemon = await this.findOne(id);
        if (!existPokemon) {
            return api_response_msg_1.ApiResponseMsg.notFoundResponse(`element with id = ${id} not found`);
        }
        const qBuilder = new update_orm_1.TypeOrmMethods_Update(this.pokemonRepository);
        await qBuilder.updateExist(updatePokemonDto, existPokemon);
        const updatedExistRecord = await this.findOne(id);
        return api_response_msg_1.ApiResponseMsg.successResponse(`element with id = ${id} updated successfully`, updatedExistRecord);
    }
    async remove(id) {
        const qBuilder = new delete_orm_1.TypeOrmMethods_Delete(this.pokemonRepository);
        return await qBuilder.delete(id);
    }
};
PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pokemon_entity_1.PokemonEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map