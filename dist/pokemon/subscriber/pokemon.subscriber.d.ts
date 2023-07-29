import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { PokemonEntity } from '../entities/pokemon.entity';
export declare class PokemonSubscriber implements EntitySubscriberInterface, OnModuleInit {
    private moduleRef;
    constructor(dataSource: DataSource, moduleRef: ModuleRef);
    onModuleInit(): Promise<void>;
    listenTo(): typeof PokemonEntity;
    beforeInsert(event: InsertEvent<PokemonEntity>): Promise<any>;
}
