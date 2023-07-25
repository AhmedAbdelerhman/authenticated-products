// import { Exclude, Expose, Transform } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,

  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pokemon' })
export class PokemonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pokedexNumber: number;

  @Column()
  imgName: string;

  @Column()
  generation: number;

  @Column()
  evolutionStage: string;

  @Column()
  evolved: boolean;

  @Column()
  familyID: number;

  @Column()
  crossGen: boolean;

  @Column()
  type1: string;

  @Column({ nullable: true })
  type2: string;

  @Column()
  weather1: string;

  @Column({ nullable: true })
  weather2: string;

  @Column()
  statTotal: number;

  @Column()
  ATK: number;

  @Column()
  DEF: number;

  @Column()
  STA: number;

  @Column()
  legendary: boolean;

  @Column()
  acquirable: boolean;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: boolean;

  @Column()
  hatchable: boolean;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  new: boolean;

  @Column()
  notGettable: boolean;

  @Column()
  futureEvolve: boolean;

  @Column()
  cpAt40: number;

  @Column()
  cpAt39: number;
}
