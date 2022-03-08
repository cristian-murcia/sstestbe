import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class TableDto {

    @ApiProperty()
    readonly id: number;

    @IsString()
    @MaxLength(30)
    @ApiProperty()
    readonly name: string;
}