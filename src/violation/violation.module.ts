import { Module } from '@nestjs/common';
import { ViolationService } from './violation.service';
import { ViolationController } from './violation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViolationEntity } from './entities/violation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ViolationEntity])],
  controllers: [ViolationController],
  providers: [ViolationService]
})
export class ViolationModule {}
