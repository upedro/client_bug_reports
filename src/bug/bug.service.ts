import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomException } from '../utils/custom-error';
import { ErrorType } from '../utils/errors';
import { Bug } from './bug.entity';

@Injectable()
export class BugService {
  constructor(@InjectModel('Bug') private readonly bugModel: Model<Bug>) {}
  async create(bug: Bug) {
    try {
      const createBug = new this.bugModel(bug);
      return await createBug.save();
    } catch (error) {
      console.log(error.message)
      throw new CustomException(
        ErrorType.BugCannotBeRegistered,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    return `This action returns all bug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bug`;
  }

  update(id: number, updateBugDto: any) {
    return `This action updates a #${id} bug`;
  }

  remove(id: number) {
    return `This action removes a #${id} bug`;
  }
}
