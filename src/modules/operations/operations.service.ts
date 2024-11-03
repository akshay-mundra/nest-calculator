import { Injectable, HttpException } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { Operation } from '../../entities/operations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private readonly operationRepository: Repository<Operation>,
  ) {}

  async create(email: string, createOperationDto: CreateOperationDto) {
    const { operand1, operand2, operator } = createOperationDto;

    let result;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0)
          throw new HttpException('Denominator should not be 0', 422);
        result = operand1 / operand2;
        break;
      default:
        throw new HttpException('Invalid operator', 422);
    }

    const operations = await this.operationRepository.create({
      email,
      operand1,
      operand2,
      operator,
      result,
    });
    return this.operationRepository.save(operations);
  }

  async findAll(email: string) {
    return await this.operationRepository.find({ where: { email: email } });
  }

  async removeAll(email: string) {
    const res = await this.operationRepository.delete({ email });
    if (!res.affected) {
      throw new HttpException('No user operations', 400);
    }
    return { message: 'Remove all user operations' };
  }

  async remove(email: string, id: string) {
    const res = await this.operationRepository.delete({ id, email });
    if (!res.affected) {
      throw new HttpException('No operations with that id or email', 404);
    }
    return { message: `Removed operations with id ${id}` };
  }
}
