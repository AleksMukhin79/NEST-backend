import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepDto } from './dto/create-dep.dto';
import { UpdateDepDto } from './dto/update-dep.dto';
import { DepsEntity } from './entities/dep.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepsService {
  constructor(
    @InjectRepository(DepsEntity)
    private repository: Repository<DepsEntity>,
  ) {}

  create(dto: CreateDepDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dep`;
  }

  update(id: number, updateDepDto: UpdateDepDto) {
    return `This action updates a #${id} dep`;
  }

  remove(id: number) {
    return `This action removes a #${id} dep`;
  }
}
