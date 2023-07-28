import { MigrationInterface, QueryRunner } from "typeorm";

export class InitalizationDataBase1690536408401 implements MigrationInterface {
    name = 'InitalizationDataBase1690536408401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "pokedexNumber" int NOT NULL, "imgName" int NOT NULL, "generation" int NOT NULL, "evolutionStage" nvarchar(255) NOT NULL, "evolved" bit NOT NULL, "familyID" int, "crossGen" bit NOT NULL, "type1" nvarchar(255) NOT NULL, "type2" nvarchar(255), "weather1" nvarchar(255) NOT NULL, "weather2" nvarchar(255), "statTotal" int NOT NULL, "ATK" int NOT NULL, "DEF" int NOT NULL, "STA" int NOT NULL, "legendary" bit NOT NULL, "acquirable" bit NOT NULL, "spawns" bit NOT NULL, "regional" bit NOT NULL, "raidable" bit NOT NULL, "hatchable" bit NOT NULL, "shiny" bit NOT NULL, "nest" bit NOT NULL, "new" bit NOT NULL, "notGettable" bit NOT NULL, "futureEvolve" bit NOT NULL, "cpAt40" int NOT NULL, "cpAt39" int NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_f13e82ee59a174bb3404ee376c1" DEFAULT getdate(), "updated_at" datetime2 CONSTRAINT "DF_16793619f9a6b8e2ee2c5ddbfab" DEFAULT getdate(), CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
