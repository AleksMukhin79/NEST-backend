import { PartialType } from '@nestjs/mapped-types';
import { CreateViolaDetailDto } from './create-violaDetail.dto';

export class UpdateViolaDetailDto extends PartialType(CreateViolaDetailDto) {}
