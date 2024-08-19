import { CsvDataStatusEnum } from 'src/csvdata/enums/csvdata';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCsvDataTable1723880576347 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'csv_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'filename',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(CsvDataStatusEnum),
          },
          {
            name: 'error_log',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)',
            onUpdate: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('csv_data');
  }
}
