import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Reviews } from "./entities/review.entity";
import { Repository } from "typeorm";

@Injectable()
export class ReviewService{
    constructor(
        @InjectRepository(Reviews)
        private readonly reviewsRepository : Repository<Reviews>
    ){}

    async getReviewsWithDetails(){
        return this.reviewsRepository
            .createQueryBuilder('review')
            .innerJoin('review.user','user')
            .innerJoin('review.book','book')
            .select([
                'user.name',
                'book.title',
                'review.rating',
                'review.comment',
      ])
      .getRawMany();
    }
}