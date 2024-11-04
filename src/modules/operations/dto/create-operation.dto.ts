import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateOperationDto {
	@IsNotEmpty({ message: 'Operator is required' })
	@IsInt()
	operand1: number;

	@IsNotEmpty({ message: 'Operator is required' })
	@IsInt()
	operand2: number;

	@IsNotEmpty({ message: 'Operator is required' })
	operator: string;
}
