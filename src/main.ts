import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/exceptions/exception-standar';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('SSTestBE en Node.Js con Nestjs')
    .setDescription('El api permite consultar esquema de tablas y realizar un crud de los registros de las tablas ')
    .setContact(
      'Cristian Arnulfo Murcia Guzmán',
      'https://www.linkedin.com/in/cristian-arnulfo-murcia-guzman/',
      'djcrissguzman@gmail.com'
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3000);

  // eslint-disable-next-line prettier/prettier
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
