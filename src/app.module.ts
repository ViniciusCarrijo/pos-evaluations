import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.18.9/bora-jogar'),
    EvaluationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
