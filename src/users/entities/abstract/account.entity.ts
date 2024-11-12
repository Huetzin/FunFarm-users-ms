import { Column } from 'typeorm';

export abstract class Account {
  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  nickname: string;
}
