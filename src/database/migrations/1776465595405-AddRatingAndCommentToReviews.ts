import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRatingAndCommentToReviews1776465595405 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "reviews"
            ADD COLUMN "rating" INTEGER NOT NULL,
            ADD COLUMN "comment" VARCHAR,
            ADD CONSTRAINT "CHK_reviews_rating" CHECK ("rating" >= 1 AND "rating" <= 5)
    `);
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "reviews"
            DROP CONSTRAINT "CHK_reviews_rating",
            DROP COLUMN "rating",
            DROP COLUMN "comment"
    `);
}
}
