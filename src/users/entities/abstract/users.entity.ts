import { Column, JoinColumn, OneToOne } from 'typeorm';
import { Account } from './account.entity';
import { Security } from '../security.entity';

export abstract class User extends Account {
  @Column({ type: 'varchar', nullable: false })
  firstname: string;

  @Column({ type: 'varchar', nullable: false })
  lastname: string;

  @Column({ type: 'varchar' })
  middlename: string;

  @Column({ type: 'varchar' })
  image: string;

  @OneToOne(() => Security)
  @JoinColumn()
  security: Security;
}
