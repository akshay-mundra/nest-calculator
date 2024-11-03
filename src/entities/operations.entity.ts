import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operations')
export class Operation {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false })
	operand1: number;

	@Column({ nullable: false })
	operand2: number;

	@Column({ nullable: false })
	operator: string;

	@Column()
	result: number;

	@Column({ nullable: false, unique: true })
	email: string;
}
