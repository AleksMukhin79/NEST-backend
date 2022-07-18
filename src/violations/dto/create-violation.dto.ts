import { IsNotEmpty } from "class-validator";

export class CreateViolationDto {
    tab_num: number
    violator: string;
    declarant: string;
    @IsNotEmpty()
    deps_id: number;
}
