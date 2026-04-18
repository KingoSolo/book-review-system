import { Reviews } from '../../reviews/entities/review.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!:number

	@Column({ type: 'varchar', length: 100 })
	name!: string;

	@Column({ type: 'varchar', length: 255, unique: true })
	email!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

    @OneToMany(()=> Reviews, (review) => review.user)
    reviews!: Reviews[]
}
