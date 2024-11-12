import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class Timestamps {
  @CreateDateColumn({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp without time zone', nullable: true })
  deletedAt: Date;
}
