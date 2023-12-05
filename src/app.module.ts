import { Module } from '@nestjs/common';

import { AliveModule } from "./features/alive/alive.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AliveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
