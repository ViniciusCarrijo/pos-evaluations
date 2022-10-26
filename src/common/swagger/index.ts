import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common/interfaces';
import * as config from 'package.json';

export class SwaggerFactory {
  config: any;
  document: any;

  constructor(app: INestApplication) {
    this.config = new DocumentBuilder()
      .setTitle(config.name)
      .setDescription(config.description)
      .setVersion(config.version)
      .build();

    this.document = SwaggerModule.createDocument(app, this.config);
    SwaggerModule.setup('api/docs', app, this.document);
  }
}
