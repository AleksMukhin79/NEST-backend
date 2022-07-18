import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateViolaDetailDto } from './dto/create-violaDetail.dto';
import { UpdateViolaDetailDto } from './dto/update-violaDetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ViolaDetailEntity } from './entities/violaDetail.entity';
import { Repository } from 'typeorm';
import { SearchViolaDetailDto } from './dto/search-violaDetail.dto';

@Injectable()
export class ViolaDetailService {
  constructor(
    @InjectRepository(ViolaDetailEntity)
    private repository: Repository<ViolaDetailEntity>,
  ) {}

  async findOne(dto: SearchViolaDetailDto) {
    const qb = this.repository
      .createQueryBuilder('vd')
      .select([])
      .innerJoin('violations', 'v', 'v.id = vd.viola_id')
      .innerJoin('deps', 'd', 'd.id = v.deps_id')
      .where('vd.viola_id = :viola_id', { viola_id: dto.viola_id })
      .orderBy("vd.createdAt", "ASC")
      .getRawMany()
    if ((await qb).length == 0) {
      throw new NotFoundException('Записей не найдено');
    }
    return qb;
  }

  create(dto: CreateViolaDetailDto) {
    return this.repository.save({
      url_foto: dto.url_foto,
      description: dto.description,
      coordinates: dto.coordinates,
      violation: { id: dto.viola_id },
    });
  }


  update(id: number, updateVioldatumDto: UpdateViolaDetailDto) {
    return `This action updates a #${id} violdatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} violdatum`;
  }
}
