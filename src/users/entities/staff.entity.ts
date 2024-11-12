import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './abstract/users.entity';
import { Timestamps } from './embedded/timestamps.entity';
import { Role } from './roles.entity';

@Entity('users')
export class Staff extends User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column(() => Timestamps)
  timestamps: Timestamps;
}
