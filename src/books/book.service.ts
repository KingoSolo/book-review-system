import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Books } from "./entities/book.entity";

@Injectable()
export class BookService{
    constructor(
        @InjectRepository(Books)
        private readonly bookRepository : Repository<Books>
    ){}

    async getBooksWithReviewCount(){
        return this.bookRepository
            .createQueryBuilder("book")
            .leftJoin('book.reviews','review')
            .select([
                'book.title',
                'book.author',
                'COUNT(review.id) AS review_count'
            ])
            .groupBy('book.id')
            .getRawMany()
    }
}