import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class DataTableOneDto {

    @ApiProperty()
    readonly t1c1?: number;

    @IsString()
    @MaxLength(50)
    @ApiProperty()
    readonly t1c2: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly t1c3?: number;

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    readonly t1c4?: Date;

}