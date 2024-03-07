import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1709786022243 implements MigrationInterface {
    name = 'Auto1709786022243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "image"`);
    }

}
