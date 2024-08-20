import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { UploadFileDto } from './dtos/upload-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { files: 1 },
      fileFilter: (req, file, cb) => {
        const allowedMimeType = 'text/csv';
        if (allowedMimeType !== file.mimetype) {
          cb(new BadRequestException('Invalid file type'), false);
        }

        cb(null, true);
      },
    }),
  )
  @ApiBody({
    description: 'File upload',
    type: UploadFileDto,
  })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileUploadService.uploadFile(file);
  }
}
