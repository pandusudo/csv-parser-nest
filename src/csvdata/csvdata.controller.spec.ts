import { Test, TestingModule } from '@nestjs/testing';
import { CsvdataController } from './csvdata.controller';

describe('CsvdataController', () => {
  let controller: CsvdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvdataController],
    }).compile();

    controller = module.get<CsvdataController>(CsvdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
