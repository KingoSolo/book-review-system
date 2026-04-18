import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldsToBooks1776465594979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "books"
                ADD COLUMN "author" VARCHAR NOT NULL,
                ADD COLUMN "published_year"  INTEGER
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "books"
                DROP COLUMN "author"
                DROP COLUMN "published_year"
            `)
    }

}
