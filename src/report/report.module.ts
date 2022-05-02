import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ReportSchema } from './report.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from '../client/client.entity';
import { BugSchema } from '../bug/bug.entity';
import { ClientModule } from '../client/client.module';
import { BugModule } from '../bug/bug.module';
import { ClientService } from '../client/client.service';

@Module({
  imports: [
    ClientModule,
    BugModule,
    MongooseModule.forFeature([
      { name: 'Report', schema: ReportSchema },
      { name: 'Client', schema: ClientSchema },
      { name: 'Bug', schema: BugSchema },
    ]),
  ],
  controllers: [ReportController],
  providers: [ReportService, ClientService],
})
export class ReportModule {}
