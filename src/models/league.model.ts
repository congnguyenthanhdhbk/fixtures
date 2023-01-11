import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegularSessionEnum } from '../enum/regular-session.enum';
import { BaseModel } from './base.model';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class League extends BaseModel {
  @ApiProperty()
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  country: string;

  @Column({ nullable: true })
  @ApiProperty()
  logo: string; // url link as below sample https://media.api-sports.io/football/leagues/115.png

  @Column({ nullable: true })
  @ApiProperty()
  flag: string; // url link as below sample https://media.api-sports.io/flags/ma.svg

  @Column({ nullable: true })
  @ApiProperty()
  season: number; // format yyyy

  @Column({ nullable: true })
  @ApiProperty()
  round: RegularSessionEnum; // regular season
}
