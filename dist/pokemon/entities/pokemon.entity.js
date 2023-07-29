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
exports.PokemonEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let PokemonEntity = class PokemonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PokemonEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "pokedexNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "imgName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "generation", void 0);
__decorate([
    (0, class_transformer_1.Transform)((entity) => {
        return entity + '';
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PokemonEntity.prototype, "evolutionStage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "evolved", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "familyID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "crossGen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PokemonEntity.prototype, "type1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PokemonEntity.prototype, "type2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PokemonEntity.prototype, "weather1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PokemonEntity.prototype, "weather2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "statTotal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "ATK", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "DEF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "STA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "legendary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "acquirable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "spawns", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "regional", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "raidable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "hatchable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "shiny", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "nest", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "new", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "notGettable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PokemonEntity.prototype, "futureEvolve", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "cpAt40", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "cpAt39", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({}),
    __metadata("design:type", Date)
], PokemonEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], PokemonEntity.prototype, "updated_at", void 0);
PokemonEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pokemon' })
], PokemonEntity);
exports.PokemonEntity = PokemonEntity;
//# sourceMappingURL=pokemon.entity.js.map