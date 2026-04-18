
import { Books } from "../../books/entities/book.entity"
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reviews{
    @PrimaryGeneratedColumn()
    id!:number

    @CreateDateColumn()
    created_at!:Date

    @Column()
    rating!:number

    @Column()
    comment!:string

   @ManyToOne(()=>User,(user) => user.reviews)
   @JoinColumn({name:"user_id"})
   user!: User

   @ManyToOne(() => Books, (book) => book.reviews)
   @JoinColumn({name:"book_id"})
   book!:Books
}