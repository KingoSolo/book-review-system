import { Controller, Get } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller("reviews")
export class ReviewController{
    constructor(private readonly reviewService:ReviewService){}

    @Get('details')
    async findAll(){
        return this.reviewService.getReviewsWithDetails()
    }
}