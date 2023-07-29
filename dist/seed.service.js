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
exports.SeedService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const parseExcelToJsObject_1 = require("./util/parseExcelToJsObject");
const pokemon_entity_1 = require("./pokemon/entities/pokemon.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SeedService = class SeedService {
    constructor(connection, pokemonRepository) {
        this.connection = connection;
        this.pokemonRepository = pokemonRepository;
    }
    async seedFromExcel(filePath) {
        const data = await (0, parseExcelToJsObject_1.parseExcelToJsObject)(filePath);
        const count = await this.pokemonRepository.count();
        if (!count) {
            this.pokemonRepository.clear();
            console.log("start seeding");
            await this.connection.transaction(async (manager) => {
                for (const row of data) {
                    const pokemon = new pokemon_entity_1.PokemonEntity();
                    Object.assign(pokemon, row);
                    pokemon.legendary = pokemon.legendary == 1 && true;
                    pokemon.regional = pokemon.regional == 1 && true;
                    pokemon.shiny = pokemon.shiny == 1 && true;
                    pokemon.new = pokemon.new == 1 && true;
                    pokemon.evolutionStage = pokemon.evolutionStage + "";
                    await manager.save(pokemon);
                }
            });
            console.log('Database seeding completed.');
        }
        else {
            console.log('Database has already data');
        }
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(pokemon_entity_1.PokemonEntity)),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        typeorm_1.Repository])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map