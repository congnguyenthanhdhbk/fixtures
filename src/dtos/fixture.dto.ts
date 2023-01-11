import { ApiProperty } from '@nestjs/swagger';

/**
 * class to define a data transfer object
 */
export class FixtureDto {
  @ApiProperty()
  fromDate: string; // ISO 8601 format for date string
  @ApiProperty()
  toDate: string; // ISO 8601 for format data string
}

export class FixtureResponseDto {
  @ApiProperty()
  referee: string;
  @ApiProperty()
  timezone: string;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  first: number;
  @ApiProperty()
  second: number;
  @ApiProperty()
  long: string;
  @ApiProperty()
  short: string;
  @ApiProperty()
  elapsed: number;
  @ApiProperty()
  goalHome: number;
  @ApiProperty()
  goalAway: number;
  @ApiProperty()
  halftimeScoreHome: number;
  @ApiProperty()
  halftimeScoreAway: number;
  @ApiProperty()
  fullTimeScoreHome: number;
  @ApiProperty()
  fullTimeScoreAway: number;
  @ApiProperty()
  extraTimeScoreHome: number | null;
  @ApiProperty()
  extraTimeScoreAway: number | null;
  @ApiProperty()
  penaltyScoreAway: number | null;
  @ApiProperty()
  penaltyScoreHome: number | null;
  venue: VenueDto;
  @ApiProperty()
  teams: TeamDto[];
  league: LeagueDto;
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}

export class TeamDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  logo: string;
  @ApiProperty()
  winner: boolean;
  @ApiProperty()
  isHome: boolean;
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}

export class VenueDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}

export class LeagueDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  logo: string;
  @ApiProperty()
  flag: string;
  @ApiProperty()
  season: number;
  @ApiProperty()
  round: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}
