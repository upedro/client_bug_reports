import { Module } from '@nestjs/common';
import { BugService } from './bug.service';
import { BugController } from './bug.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BugSchema } from './bug.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bug', schema: BugSchema }])],
  controllers: [BugController],
  providers: [BugService],
  exports: [BugService],
})
export class BugModule {}
