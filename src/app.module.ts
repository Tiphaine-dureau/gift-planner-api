import { Module } from '@nestjs/common';

import { AliveModule } from "./features/alive/alive.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./features/user/user.module";

@Module({
  imports: [
    AliveModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
