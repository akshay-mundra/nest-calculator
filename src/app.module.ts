import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsModule } from './modules/operations/operations.module';

@Module({
  imports: [OperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
