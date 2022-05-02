import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomException } from '../utils/custom-error';
import { ErrorType } from '../utils/errors';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async create(client: Client): Promise<Client> {
    const clientExist = await this.clientModel.findOne({email:client.email}).exec();
    if (clientExist){
      throw new CustomException(
        ErrorType.EmailAlreadyExists,
        HttpStatus.BAD_REQUEST,
      );
    }
    const createClient = new this.clientModel(client);
    return createClient.save();
  }

  async findAll() {
    return await this.clientModel.find({})
  }

  async findOne(id: any) {
    try {
      const getClient = await this.clientModel.findOne({ _id: id }).exec();
      if (!getClient){
        throw new CustomException(
          ErrorType.ClientNotExists,
          HttpStatus.BAD_REQUEST,
        );
      }
      return getClient;
    } catch (error) {
      throw new CustomException(
        ErrorType.ClientNotExists,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByEmail(email: any) {
    try {
      const getClient = await this.clientModel.findOne({ email }).exec();
      if (!getClient){
        throw new CustomException(
          ErrorType.ClientNotExists,
          HttpStatus.BAD_REQUEST,
        );
      }
      return getClient;
    } catch (error) {
      throw new CustomException(
        ErrorType.ClientNotExists,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, client: Partial<Client>) {
    try {
      const updateClient = await this.clientModel.findByIdAndUpdate({ _id: id },client);
      const returnClient = await this.clientModel.findOne({ _id: id });
      return returnClient;
    } catch (error) {
      throw new CustomException(
        ErrorType.ClientNotBeUpdated,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
