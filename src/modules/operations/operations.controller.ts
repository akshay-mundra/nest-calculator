import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UserEmail } from '../../decorators/user-email.decorator';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  create(
    @UserEmail() email: string,
    @Body() createOperationDto: CreateOperationDto,
  ) {
    return this.operationsService.create(email, createOperationDto);
  }

  @Get()
  findAll(@UserEmail() email: string) {
    return this.operationsService.findAll(email);
  }

  @Delete('')
  removeAll(@UserEmail() email: string) {
    return this.operationsService.removeAll(email);
  }

  @Delete(':id')
  remove(@UserEmail() email: string, @Param('id') id: string) {
    return this.operationsService.remove(email, id);
  }
}
