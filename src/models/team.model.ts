import { Column, Entity, ManyToOne } from 'typeorm';
import { Fixtures } from './fixtures.model';
import { BaseModel } from './base.model';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Manage team's info
 */
@Entity()
export class Team extends BaseModel {
  @ApiProperty()
  @Column({ nullable: true })
  name: string; // name of club
  @ApiProperty()
  @Column({ nullable: true })
  logo: string; // logo of club
  @ApiProperty()
  @Column({ nullable: true })
  winner: boolean; // status to declare for finishing a match

  @Column({ nullable: true })
  @ApiProperty()
  isHome: boolean; // true: home, false: away

  @ManyToOne(() => Fixtures, (fixtures) => fixtures.teams)
  @ApiProperty()
  fixtures: Fixtures;
}
