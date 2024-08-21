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
    @InjectQueue('file-upload')
    private fileQueue: Queue,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    // TODO: need to do a research if it's possible to pause a job by removing the job, save the progress in DB,
    // then resume it again based on the latest progress in DB
    const job = await this.fileQueue.add('csv-processor', { foo: 'bar' });
    return null;
  }
}
