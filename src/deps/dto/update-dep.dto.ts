import { PartialType } from '@nestjs/mapped-types';
import { CreateDepDto } from './create-dep.dto';

export class UpdateDepDto extends PartialType(CreateDepDto) {}
