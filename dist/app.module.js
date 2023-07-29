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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const seed_service_1 = require("./seed.service");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("./ormconfig");
const pokemon_module_1 = require("./pokemon/pokemon.module");
const pokemon_entity_1 = require("./pokemon/entities/pokemon.entity");
const typeorm_2 = require("typeorm");
console.log(ormconfig_1.ormOptions);
let AppModule = class AppModule {
    constructor(connection, seedService) {
        this.connection = connection;
        this.seedService = seedService;
        this.seedData();
    }
    async seedData() {
        try {
            await this.seedService.seedFromExcel('./Pokemon_Go.xlsx');
        }
        catch (error) {
            console.error('Database seeding failed need to migrate:', error.message);
        }
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(Object.assign({}, ormconfig_1.ormOptions)),
            typeorm_1.TypeOrmModule.forFeature([pokemon_entity_1.PokemonEntity]),
            pokemon_module_1.PokemonModule,
        ],
        providers: [seed_service_1.SeedService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        seed_service_1.SeedService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map