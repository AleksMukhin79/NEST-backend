import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepsService } from './deps.service';
import { CreateDepDto } from './dto/create-dep.dto';
import { UpdateDepDto } from './dto/update-dep.dto';

@Controller('deps')
export class DepsController {
  constructor(private readonly depsService: DepsService) { }

  @Post()
  create(@Body() dto: CreateDepDto) {
    return this.depsService.create(dto);
  }

  @Get()
  findAll() {
    return this.depsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDepDto) {
    return this.depsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depsService.remove(+id);
  }
}
