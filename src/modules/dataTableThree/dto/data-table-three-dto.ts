import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class DataTableThreeDto {

    @ApiProperty()
    readonly t3c1?: number;

    @IsString()
    @MaxLength(50)
    @ApiProperty()
    readonly t3c2: string;

    @IsDateString()
    @ApiProperty()
    readonly t3c3: Date;
}