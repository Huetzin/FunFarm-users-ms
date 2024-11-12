import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('security')
export class Security {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bytea', nullable: false })
  password: Buffer;
}
