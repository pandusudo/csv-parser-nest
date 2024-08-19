import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CsvDataStatusEnum } from '../enums/csvdata';

@Entity()
export class CsvData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column({ type: 'enum', enum: CsvDataStatusEnum })
  status: CsvDataStatusEnum;

  @Column({ nullable: true })
  error_log?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
