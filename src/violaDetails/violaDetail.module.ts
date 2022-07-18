import { Module } from '@nestjs/common';
import { ViolaDetailService } from './violaDetail.service';
import { ViolaDetailController } from './violaDetail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViolaDetailEntity } from './entities/violaDetail.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ViolaDetailEntity])],
  controllers: [ViolaDetailController],
  providers: [ViolaDetailService]
})
export class ViolaDetailModule {}
