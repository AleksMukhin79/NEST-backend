import { Module } from '@nestjs/common';
import { DepsService } from './deps.service';
import { DepsController } from './deps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepsEntity } from './entities/dep.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepsEntity])],
  controllers: [DepsController],
  providers: [DepsService]
})
export class DepsModule {}
