import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitalizationDataBase1690536408401 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
