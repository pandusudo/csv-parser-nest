import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FileUploadStatusEnum } from '../enums/file-upload';

export class UploadFileDto {
  @IsString()
  filename: string;

  @IsEnum(FileUploadStatusEnum)
  status: FileUploadStatusEnum;

  @IsOptional()
  @IsString()
  error_log?: string;
}
