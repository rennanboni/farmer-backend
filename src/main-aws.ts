import 'source-map-support/register';
import { lambda } from '@gcoreplus/nestjs-aws-serverless';
import { AppModule } from './app.module';

export const handler = lambda(AppModule);
