import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamps } from './embedded/timestamps.entity';
import { Role } from './roles.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  group: string;

  @Column({ type: 'varchar', nullable: false })
  action: string;

  @Column({ type: 'boolean', default: false })
  value: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];

  @Column(() => Timestamps)
  timestamps: Timestamps;
}
