import { Body, Controller, Post } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { UploadFileDto } from './dtos/upload-file.dto';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  uploadFile(@Body() uploadFileDto: UploadFileDto) {
    return this.fileUploadService.uploadFile(uploadFileDto);
  }
}
