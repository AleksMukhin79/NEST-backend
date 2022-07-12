import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViolationModule } from './violation/violation.module';
import { DepsModule } from './deps/deps.module';
import { DepsEntity } from './deps/entities/dep.entity';
import { ViolationEntity } from './violation/entities/violation.entity';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: '7C',
      entities: [DepsEntity, ViolationEntity],
      synchronize: true,
    }),  
    ViolationModule,
    DepsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
