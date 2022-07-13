import { IsNotEmpty } from "class-validator";

export class CreateViolationDto {
    url_foto: string;
    description: string;
    coordinates: string;
    tab_num: number
    violator: string;
    declarant: string;
    @IsNotEmpty()
    deps_id: number;
}
