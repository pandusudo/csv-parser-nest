import { Module } from '@nestjs/common';
import { CsvdataController } from './csvdata.controller';
import { CsvdataService } from './csvdata.service';
import { CsvData } from './entities/csvdata.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CsvData])],
  controllers: [CsvdataController],
  providers: [CsvdataService],
})
export class CsvdataModule {}
