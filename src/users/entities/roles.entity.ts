import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Timestamps } from './embedded/timestamps.entity';
import { Permission } from './permissions.entity';
import { Staff } from './staff.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  slug: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => Staff, (staff) => staff.role)
  users: Staff[];

  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];

  @Column(() => Timestamps)
  timestamps: Timestamps;
}
