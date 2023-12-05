import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('alive')
export class AliveController {

  @Get()
  @HttpCode(204)
  public alive(): void {
  }
}
