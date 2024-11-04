import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsModule } from './modules/operations/operations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm-config';
import { Operation } from './entities/operations.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => typeOrmConfig,
    }),
    OperationsModule,
    TypeOrmModule.forFeature([Operation]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
