import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { BugModule } from './bug/bug.module';
import { ReportModule } from './report/report.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      `mongodb+srv://pedroteste:xckx0cHWt4KLGSng@cluster0.vnpzu.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-qehhzi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
    ),
    BugModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
