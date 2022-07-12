import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ViolationEntity } from './entities/violation.entity';
import { Repository } from 'typeorm';
import { SearchViolationDto } from './dto/search-violation.dto';

@Injectable()
export class ViolationService {
  constructor(
    @InjectRepository(ViolationEntity)
    private repository: Repository<ViolationEntity>,
  ) { }

  create(dto: CreateViolationDto) {
    return this.repository.save({
      url_foto: dto.url_foto,
      description: dto.description,
      coordinates: dto.coordinates,
      tab_num: dto.tab_num,
      violator: dto.violator,
      declarant: dto.declarant,
      deps: { id: dto.deps_id }
    });
  }


  async popular() {
    const qb= this.repository.createQueryBuilder('violation');
    qb.orderBy('id', 'DESC');
    qb.limit(10);
    const [items, total] = await qb.getManyAndCount();
    return {
      items,
      total,
    };
  }


  async search(SearchDto: SearchViolationDto) {
    const qb= this.repository.createQueryBuilder('v');

    if (SearchDto.foto){
      qb.where('v.url_foto ILIKE :foto')
    }

    qb.setParameters({
      foto: '%' + SearchDto.foto +'%'
    });

    const [items, total] = await qb.getManyAndCount();
    return { items, total };

  }


  findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC'
      }
    });
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException('Нарушение не найдено');
    }
    return find;
  }

  async update(id: number, dto: UpdateViolationDto) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException('Нарушение не найдено');
    }

    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
function dto(dto: any) {
  throw new Error('Function not implemented.');
}

