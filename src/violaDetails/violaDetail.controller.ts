import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ViolaDetailService } from './violaDetail.service';
import { CreateViolaDetailDto } from './dto/create-violaDetail.dto';
import { UpdateViolaDetailDto } from './dto/update-violaDetail.dto';
import { SearchViolaDetailDto } from './dto/search-violaDetail.dto';

@Controller('details')
export class ViolaDetailController {
  constructor(private readonly violaDetailService: ViolaDetailService) {}

  @Post()
  create(@Body() dto: CreateViolaDetailDto) {
    return this.violaDetailService.create(dto);
  }

  @Get()
  findOne(@Query() dto: SearchViolaDetailDto){
    return this.violaDetailService.findOne(dto);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVioldatumDto: UpdateViolaDetailDto) {
    return this.violaDetailService.update(+id, updateVioldatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.violaDetailService.remove(+id);
  }
}
