import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { msg: 'Hello world!!!', statusCode: HttpStatus.OK }
  }
}
