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
exports.PokemonSubscriber = void 0;
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const pokemon_entity_1 = require("../entities/pokemon.entity");
let PokemonSubscriber = class PokemonSubscriber {
    constructor(dataSource, moduleRef) {
        this.moduleRef = moduleRef;
        dataSource.subscribers.push(this);
    }
    async onModuleInit() { }
    listenTo() {
        return pokemon_entity_1.PokemonEntity;
    }
    async beforeInsert(event) {
    }
};
PokemonSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource, core_1.ModuleRef])
], PokemonSubscriber);
exports.PokemonSubscriber = PokemonSubscriber;
//# sourceMappingURL=pokemon.subscriber.js.map