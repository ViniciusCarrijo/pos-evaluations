import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateEvaluationRequest {
  @ApiProperty({
    name: 'comment',
    type: String,
    required: true,
    example: 'This is a example comment',
  })
  @IsString()
  comment: string;

  @ApiProperty({
    name: 'stars',
    type: Number,
    required: true,
    example: 5,
  })
  @IsNumber()
  stars: number;

  @ApiProperty({
    name: 'userId',
    type: Number,
    required: true,
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    name: 'scheduleId',
    type: Number,
    required: true,
    example: 1,
  })
  @IsNumber()
  scheduleId: number;
}
