import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateReviewsTable1776462416166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                CREATE TABLE "reviews"(
                    "id" SERIAL PRIMARY KEY,
                    "user_id" INTEGER NOT NULL,
                    "book_id" INTEGER NOT NULL,
                    "created_at" TIMESTAMP DEFAULT now(),
                    CONSTRAINT "FK_reviews_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id"),
                    CONSTRAINT "FK_reviews_book_id" FOREIGN KEY ("book_id") REFERENCES "books"("id")
                 )
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reviews"`)
    }

}
