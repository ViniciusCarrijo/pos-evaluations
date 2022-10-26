import { Injectable } from '@nestjs/common';
import { CreateEvaluationRequest } from './dto/request/create-evaluation';
import { EvaluationDocument } from './entity/evaluation.entity';
import { EvaluationDao } from './evaluation.dao';
import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common/exceptions';

@Injectable()
export class EvaluationService {
  constructor(private readonly evaluationDao: EvaluationDao) {}

  async create(
    createEvaluation: CreateEvaluationRequest,
  ): Promise<EvaluationDocument> {
    const evaluation = await this.evaluationDao.findBy({
      userId: createEvaluation.userId,
      scheduleId: createEvaluation.scheduleId,
    });

    if (evaluation) {
      throw new UnprocessableEntityException('User already evaluated');
    }

    return this.evaluationDao.create(createEvaluation);
  }

  async findById(id: string): Promise<EvaluationDocument> {
    const evaluation = await this.evaluationDao.findBy({ _id: id });

    if (!evaluation) {
      throw new NotFoundException('EvaluationId not found');
    }

    return evaluation;
  }

  async findAll(): Promise<EvaluationDocument[]> {
    const evaluations = await this.evaluationDao.findAll();

    if (!evaluations) {
      throw new NotFoundException('Evaluations not found');
    }

    return evaluations;
  }

  async delete(id: string): Promise<void> {
    await this.evaluationDao.delete(id);
  }
}
