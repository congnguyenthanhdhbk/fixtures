import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { FixturesStatusEnum } from '../enum/fixtures-status.enum';
import { Venue } from './venue.model';
import { Team } from './team.model';
import { League } from './league.model';
import { BaseModel } from './base.model';

/**
 * Managed fixtures
 */
@Entity()
export class Fixtures extends BaseModel {
  @Column({ nullable: true })
  referee: string;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  timezone: string; // Server is always records as UTC

  @Column({ nullable: true })
  timestamp: number; // It's timestamp to start match

  // period for all match. It's declare specific time for 2 round
  @Column({ name: 'periods_first', nullable: true })
  first: number; // time to start first round. It's timestamp
  @Column({ name: 'periods_second', nullable: true })
  second: number; // time to start second round. It's timestamp

  // status of fixtures
  @Column({ name: 'status_long', nullable: true })
  long: string; // Status of match round
  @Column({ name: 'status_short', nullable: true })
  short: FixturesStatusEnum; // Status code of match round
  @Column({ name: 'status_elapsed', nullable: true })
  elapsed: number; // Number of minutes of the match. Example: finished first round then elapsed is 45 minutes

  // goal for match
  @Column({ name: 'goal_home', nullable: true })
  goalHome: number | null; // number of goal of home
  @Column({ name: 'goal_away', nullable: true })
  goalAway: number | null; // number of goal of away

  // Score for match
  @Column({ name: 'halftime_score_home', nullable: true })
  halftimeScoreHome: number | null; // home is number of goal for haft time
  @Column({ name: 'halftime_score_away', nullable: true })
  halftimeScoreAway: number | null; // away is number of goal for haft time
  @Column({ name: 'full_time_score_home', nullable: true })
  fullTimeScoreHome: number | null; // home is number of goal for full time
  @Column({ name: 'full_time_score_away', nullable: true })
  fullTimeScoreAway: number | null; // away is number of goal for full time
  @Column({ name: 'extra_time_score_home', nullable: true })
  extraTimeScoreHome: number | null; // home is number of goal for extra time
  @Column({ name: 'extra_time_score_away', nullable: true })
  extraTimeScoreAway: number | null; // away is number of goal for full time
  @Column({ name: 'penalty_score_home', nullable: true })
  penaltyScoreHome: number | null; // home is number of goal for penalty
  @Column({ name: 'penalty_score_away', nullable: true })
  penaltyScoreAway: number | null; // away is number of goal for penalty

  @OneToOne(() => Venue, { eager: true, cascade: true })
  @JoinColumn()
  venue: Venue;

  @OneToMany(() => Team, (teams) => teams.fixtures, {
    eager: true,
    cascade: true,
  })
  teams: Team[];

  @OneToOne(() => League, { eager: true, cascade: true })
  @JoinColumn()
  league: League;
}
