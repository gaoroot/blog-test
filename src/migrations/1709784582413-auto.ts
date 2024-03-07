import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1709784582413 implements MigrationInterface {
    name = 'Auto1709784582413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d"`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "userId" TO "userIdId"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "userIdId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "userIdId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_99828614226a80e9362f89e3e79" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_99828614226a80e9362f89e3e79"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "userIdId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "userIdId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "userIdId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
