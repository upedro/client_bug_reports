import { Bug } from '../bug/bug.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ReportCreateModel {
  @IsEmail()
  email: Bug;

  @IsNotEmpty()
  bug: Bug;
}
