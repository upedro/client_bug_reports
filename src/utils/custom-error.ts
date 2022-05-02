import { HttpException } from '@nestjs/common';
import { ErrorType } from './errors';

export class CustomException extends HttpException {
  constructor(typeException: ErrorType, status: number) {
    super(typeException, status);
  }
}
