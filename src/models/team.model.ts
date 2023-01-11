import { Column, Entity, ManyToOne } from 'typeorm';
import { Fixtures } from './fixtures.model';
import { BaseModel } from './base.model';

/**
 * Manage team's info
 */
@Entity()
export class Team extends BaseModel {
  @Column({ nullable: true })
  name: string; // name of club
  @Column({ nullable: true })
  logo: string; // logo of club
  @Column({ nullable: true })
  winner: boolean; // status to declare for finishing a match

  @Column({ nullable: true })
  isHome: boolean; // true: home, false: away

  @ManyToOne(() => Fixtures, (fixtures) => fixtures.teams)
  fixtures: Fixtures;
}
