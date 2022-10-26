import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Evaluation, EvaluationSchema } from './entity/evaluation.entity';
import { EvaluationDao } from './evaluation.dao';
import { EvaluationController } from './evaluation.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Evaluation.name,
        schema: EvaluationSchema,
      },
    ]),
  ],
  controllers: [EvaluationController],
  providers: [EvaluationController, EvaluationService, EvaluationDao],
  exports: [EvaluationController, EvaluationService, EvaluationDao],
})
export class EvaluationModule {}
