import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegularSessionEnum } from '../enum/regular-session.enum';
import { BaseModel } from './base.model';

@Entity()
export class League extends BaseModel {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  logo: string; // url link as below sample https://media.api-sports.io/football/leagues/115.png

  @Column({ nullable: true })
  flag: string; // url link as below sample https://media.api-sports.io/flags/ma.svg

  @Column({ nullable: true })
  season: number; // format yyyy

  @Column({ nullable: true })
  round: RegularSessionEnum; // regular season
}
