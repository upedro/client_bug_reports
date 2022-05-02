import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from '../client/client.entity';
import { BugService } from '../bug/bug.service';
import { ClientService } from '../client/client.service';
import { ReportCreateModel } from '../utils/model';
import { Report } from './report.entity';
import { CustomException } from '../utils/custom-error';
import { ErrorType } from '../utils/errors';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('Report')
    private readonly reportModel: Model<Report>,
    private readonly bugService: BugService,
    private readonly clientService: ClientService,
  ) {}
  async create(report: ReportCreateModel) {
    const client = await this.clientService.findByEmail(report.email);
    if (client) {
      const bug = await this.bugService.create(report.bug);
      const newReport = new this.reportModel({
        bug: bug,
        client: client,
        received: true,
      });
      return newReport.save();
    }
    throw new CustomException(
      ErrorType.ReportCannotBeRegistered,
      HttpStatus.BAD_REQUEST,
    );
  }

  async findTop10() {
    const options = { sort: { level: -1 } };
    const top10 = await this.reportModel.aggregate([
      {
        $lookup: {
          from: 'clients',
          localField: 'client',
          foreignField: '_id',
          as: 'client',
        },
      },
      {
        $lookup: {
          from: 'bugs',
          localField: 'bug',
          foreignField: '_id',
          as: 'bug',
        },
      },
      {
        $sort: {
          'bug.level': -1
        }
      },
      {
        $limit: 10
      }
    ]);

    return top10;
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: any) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
