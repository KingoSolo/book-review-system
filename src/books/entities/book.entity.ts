import { Reviews } from '../../reviews/entities/review.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    title!:string

    @Column()
    author!: string

    @Column()
    published_year!:number

    @CreateDateColumn()
    created_at!:Date

    @OneToMany(()=> Reviews, (review) => review.book)
    reviews!:Reviews[]

}