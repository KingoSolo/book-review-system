import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1776380402653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users"(
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR NOT NULL,
                "created_at" TIMESTAMP DEFAULT now()
                 )
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` DROP TABLE "users"  `)
    }

}
