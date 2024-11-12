import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Security } from './entities/security.entity';
import { Role } from './entities/roles.entity';
import { Permission } from './entities/permissions.entity';
import { Staff } from './entities/staff.entity';
import { Timestamps } from './entities/embedded/timestamps.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Timestamps, Security, Role, Permission, Staff]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
