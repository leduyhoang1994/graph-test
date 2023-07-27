import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const keyFile = fs.readFileSync(__dirname + '/../certs/educa.vn.key');
  const certFile = fs.readFileSync(__dirname + '/../certs/educa.vn.crt');

  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    },
  });

  // app.use(cookieParser());
  // app.use(csurf({ cookie: { sameSite: true } }));

  // app.use((req: any, res: any, next: any) => {
  //   const token = req.csrfToken();
  //   res.cookie('XSRF-TOKEN', token);
  //   res.locals.csrfToken = token;

  //   next();
  // });

  await app.listen(3000);
}
bootstrap();
