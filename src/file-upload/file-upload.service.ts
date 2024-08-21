import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from './entities/file-upload.entity';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileUpload)
    private fileUploadRepository: Repository<FileUpload>,
    @InjectQueue('file-upload-queue')
    private fileQueue: Queue,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const job = await this.fileQueue.add('csv-processor', { foo: 'bar' });
    return null;
  }
}
