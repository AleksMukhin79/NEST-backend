import { IsNotEmpty } from "class-validator";

export class CreateViolaDetailDto {
    @IsNotEmpty()
    url_foto: string;
    description: string;
    coordinates: string;
    @IsNotEmpty()    
    viola_id: number;
}
