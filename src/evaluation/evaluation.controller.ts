import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateEvaluationRequest } from './dto/request/create-evaluation';
import { EvaluationDocument } from './entity/evaluation.entity';
import { EvaluationService } from './evaluation.service';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('evaluation')
@ApiTags('Evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new evaluation',
  })
  async create(
    @Body() createEvaluation: CreateEvaluationRequest,
  ): Promise<EvaluationDocument> {
    return this.evaluationService.create(createEvaluation);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find a evaluation by id',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'EvaluationId not found',
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<EvaluationDocument> {
    return this.evaluationService.findById(id);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find all evaluations',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Evaluations not found',
  })
  async findAll(): Promise<EvaluationDocument[]> {
    return this.evaluationService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Evaluation deleted',
  })
  async delete(@Param('id') id: string): Promise<void> {
    return this.evaluationService.delete(id);
  }
}
