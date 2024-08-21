import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './entities/file-upload.entity';
import { BullModule } from '@nestjs/bullmq';
import { FileUploadProcessor } from './processors/file-upload.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileUpload]),
    BullModule.registerQueue({
      name: 'file-upload',
    }),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService, FileUploadProcessor],
})
export class FileUploadModule {}
