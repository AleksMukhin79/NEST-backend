import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ViolationEntity } from './entities/violation.entity';
import { Like, RelationId, Repository } from 'typeorm';
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



  async search(dto: SearchViolationDto) {
    const qb = this.repository.createQueryBuilder('v');

    if (dto.foto) {
      qb.where('v.url_foto ILIKE :foto')
    }

    qb.setParameters({
      foto: `%${dto.foto}%`
    });

    //console.log(qb.getSql())
    const [items, total] = await qb.getManyAndCount();
    return { items, total };
  }


  async findAll() { 
    const find = await this.repository.find({
      order: { createdAt: 'DESC' },
      relations: ['deps']
    });

    if (!find) {
      throw new NotFoundException('Записей не найдено');
    } 

    return find;
  }

  async findOne(id: number) {
    const find = await this.repository.findOne({ where: { id }, });
    if (!find) {
      throw new NotFoundException('Записей не найдено');
    }

    await this.repository.createQueryBuilder('violations')
      .whereInIds(id).update().set({ views: () => 'views + 1' }).execute()

    return await this.repository.findOne({
      relations: ['deps'],
      where: { id },
    });
  }

  async update(id: number, dto: UpdateViolationDto) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException('Запись не найдена');
    }

    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOne({ where: { id }, });
    if (!find) {
      throw new NotFoundException('Запись не найдена');
    }

    return this.repository.delete(id);
  }
}

function dto(dto: any) {
  throw new Error('Function not implemented.');
}

