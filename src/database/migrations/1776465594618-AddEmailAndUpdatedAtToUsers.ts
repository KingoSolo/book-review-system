import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailAndUpdatedAtToUsers1776465594618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
                ADD COLUMN "email" VARCHAR NOT NULL UNIQUE,
                ADD COLUMN "updated_at" TIMESTAMP DEFAULT now()
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
                DROP COLUMN "email",
                DROP COLUMN "updated_at"
            `)
    }

}
