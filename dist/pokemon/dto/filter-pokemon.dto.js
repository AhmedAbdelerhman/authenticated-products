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
exports.FilterPokemonDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class FilterPokemonDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterPokemonDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterPokemonDto.prototype, "type1", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return +value.value;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FilterPokemonDto.prototype, "generation", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return +value.value;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FilterPokemonDto.prototype, "ATK", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return +value.value;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FilterPokemonDto.prototype, "STA", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return value.value == 'true' || value.value == true;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FilterPokemonDto.prototype, "legendary", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return value.value == 'true' || value.value == true;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FilterPokemonDto.prototype, "shiny", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return value.value == 'true' || value.value == true;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FilterPokemonDto.prototype, "nest", void 0);
__decorate([
    (0, class_transformer_1.Transform)((value) => {
        return value.value == 'true' || value.value == true;
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FilterPokemonDto.prototype, "new", void 0);
exports.FilterPokemonDto = FilterPokemonDto;
//# sourceMappingURL=filter-pokemon.dto.js.map