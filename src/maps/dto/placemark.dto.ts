import { ApiProperty } from '@nestjs/swagger';

export class CreatePlacemarkDto {
  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  caption: string;
}