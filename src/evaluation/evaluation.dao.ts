import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { CreateEvaluationRequest } from './dto/request/create-evaluation';
import { Evaluation, EvaluationDocument } from './entity/evaluation.entity';
import { QueryFindOne } from './interface/evaluation.interface';

@Injectable()
export class EvaluationDao {
  constructor(
    @InjectModel(Evaluation.name)
    private readonly evaluationRepository: Model<EvaluationDocument>,
  ) {}

  async create(
    createEvaluation: CreateEvaluationRequest,
  ): Promise<EvaluationDocument> {
    return this.evaluationRepository.create(
      new this.evaluationRepository(createEvaluation),
    );
  }

  async findBy(query: QueryFindOne): Promise<EvaluationDocument> {
    return this.evaluationRepository.findOne(
      _.omitBy({ ...query }, _.isUndefined),
    );
  }

  async findAll(): Promise<EvaluationDocument[]> {
    return this.evaluationRepository.find();
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.evaluationRepository.deleteOne({ _id: id });
  }
}
