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
exports.PokemonController = void 0;
const create_pokemon_1 = require("./dto/create-pokemon");
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
const update_pokemon_1 = require("./dto/update-pokemon");
const pageOption_dto_1 = require("../libs/pagination/pageOption.dto");
const filter_pokemon_dto_1 = require("./dto/filter-pokemon.dto");
let PokemonController = class PokemonController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    create(createPokemonDto) {
        return this.pokemonService.create(createPokemonDto);
    }
    findAll(pageOptionsDto, filterPokemonDto) {
        return this.pokemonService.findAll(pageOptionsDto, filterPokemonDto);
    }
    findOne(id) {
        return this.pokemonService.getSingleRecord(id);
    }
    update(id, updatePokemonDto) {
        return this.pokemonService.update(id, updatePokemonDto);
    }
    remove(id) {
        return this.pokemonService.remove(id);
    }
};
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pokemon_1.CreatePokemonDTO]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pageOption_dto_1.PageOptionsDto,
        filter_pokemon_dto_1.FilterPokemonDto]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pokemon_1.UpdatePokemonDTO]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "remove", null);
PokemonController = __decorate([
    (0, common_1.Controller)('pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map