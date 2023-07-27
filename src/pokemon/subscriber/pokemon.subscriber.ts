import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  LoadEvent,
} from 'typeorm';
import { PokemonEntity } from '../entities/pokemon.entity';

@EventSubscriber()
export class PokemonSubscriber
  implements EntitySubscriberInterface, OnModuleInit
{

  constructor(dataSource: DataSource, private moduleRef: ModuleRef) {
    dataSource.subscribers.push(this);
  }

  // inject service outsite dependency injection
  async onModuleInit() {}

  listenTo() {
    return PokemonEntity;
  }


  async beforeInsert(event: InsertEvent<PokemonEntity>): Promise<any> {
  }
}
