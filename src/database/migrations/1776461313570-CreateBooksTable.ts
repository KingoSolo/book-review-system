import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBooksTable1776461313570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                CREATE TABLE "books"(
                    "id" SERIAL PRIMARY KEY,
                    "title" VARCHAR NOT NULL,
                    "created_at" TIMESTAMP DEFAULT now()
                )
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`)
    }

}
