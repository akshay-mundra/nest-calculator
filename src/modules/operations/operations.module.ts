import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { Operation } from '../../entities/operations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OperationsController],
  providers: [OperationsService],
  imports: [TypeOrmModule.forFeature([Operation])],
})
export class OperationsModule {}
