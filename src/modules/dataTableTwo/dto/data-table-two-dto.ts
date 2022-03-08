import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class DataTableTwoDto {

    @ApiProperty()
    readonly t2c1?: number;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    @ApiProperty()
    readonly t2c2?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly t2c3?: number;

    @IsDateString()
    @ApiProperty()
    readonly t2c4: Date;

    @IsNumber()
    @ApiProperty()
    readonly t2c5: number;
}