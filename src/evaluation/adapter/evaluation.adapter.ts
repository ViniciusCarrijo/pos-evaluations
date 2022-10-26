import { CreateEvaluationRequest } from '../dto/request/create-evaluation';
import { Evaluation } from '../entity/evaluation.entity';

export class EvaluationAdapter {
  toEntityCreate(createRequest: CreateEvaluationRequest): Evaluation {
    return {
      comment: createRequest.comment,
      stars: createRequest.stars,
      userId: createRequest.userId,
      scheduleId: createRequest.scheduleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Evaluation;
  }
}
