import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViolationModule } from './violations/violation.module';
import { ViolaDetailModule } from './violaDetails/violaDetail.module';
import { DepsModule } from './deps/deps.module';
import { DepsEntity } from './deps/entities/dep.entity';
import { ViolationEntity } from './violations/entities/violation.entity';
import { ViolaDetailEntity } from './violaDetails/entities/violaDetail.entity';


@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: '7C',
      entities: [DepsEntity, ViolationEntity, ViolaDetailEntity],
      synchronize: true,
    }),  
    ViolationModule,
    DepsModule,
    ViolaDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
