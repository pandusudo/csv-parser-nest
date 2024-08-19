import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from './entities/file-upload.entity';
import { Repository } from 'typeorm';
import { UploadFileDto } from './dtos/upload-file.dto';

@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileUpload)
    private fileUploadRepository: Repository<FileUpload>,
  ) {}

  uploadFile(data: UploadFileDto) {
    const newFileUpload = this.fileUploadRepository.create(data);
    return this.fileUploadRepository.save(newFileUpload);
  }
}
