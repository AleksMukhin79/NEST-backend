import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ViolationService } from './violation.service';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { SearchViolationDto } from './dto/search-violation.dto';

@Controller('violations')
export class ViolationController {
  constructor(private readonly violationService: ViolationService) {}

  @Post()
  create(@Body() dto: CreateViolationDto) {
    return this.violationService.create(dto);
  }

  @Get('/popular')
  gepPopularPosts(){
    return this.violationService.popular();
  }

  @Get('/search')
  search(@Query() SearchDto: SearchViolationDto){
    return this.violationService.search(SearchDto);
  }



  @Get()
  findAll() {
    return this.violationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.violationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateViolationDto) {
    return this.violationService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.violationService.remove(+id);
  }
}
