import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {VersioningType} from "@nestjs/common";



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    const config  = new DocumentBuilder()
    .setTitle("Product Entity")
    .setDescription("This is Product api documentation ")
    .setVersion("1.0")
    .addTag("Entity Realtionship diagram")
    .build();
    app.enableVersioning({
      type: VersioningType.URI,
      prefix: 'v=',
    });


const document   = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document);



  await app.listen(3000);
}
bootstrap();
