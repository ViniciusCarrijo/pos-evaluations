import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EvaluationDocument = Evaluation & Document;

@Schema()
export class Evaluation {
  @Prop({ required: false })
  comment: string;

  @Prop({ required: true })
  stars: number;

  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  scheduleId: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);
