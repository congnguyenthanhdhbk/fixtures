import { Injectable } from '@nestjs/common';
import { Between, MoreThanOrEqual, Repository } from 'typeorm';
import { Fixtures } from '../../models/fixtures.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Venue } from '../../models/venue.model';
import { Team } from '../../models/team.model';
import { League } from '../../models/league.model';
import { FixtureDto } from '../../dtos/fixture.dto';

@Injectable()
export class FixturesService {
  constructor(
    @InjectRepository(Fixtures)
    private readonly fixturesRepository: Repository<Fixtures>,
  ) {}

  /**
   * The function support for creating a seeds data of fixtures
   * @param body list of fixtures
   * @return fixtureId fixture created successfully
   */
  async createFixture(body: any): Promise<any> {
    const fixtures = body?.map(
      (body) =>
        <Fixtures>{
          referee: body?.fixture?.referee,
          timezone: body?.fixture?.timezone ?? 'UTC',
          timestamp: body?.fixture?.timestamp,
          first: body?.periods?.first,
          second: body?.periods?.second,
          long: body?.status?.long,
          short: body?.status?.short,
          elapsed: body?.status?.elapsed,
          goalHome: body?.goals?.home,
          goalAway: body?.goals?.away,
          date: body?.fixture?.date,
          halftimeScoreHome: body?.score?.halftime?.home,
          halftimeScoreAway: body?.score?.halftime?.away,
          fullTimeScoreHome: body?.score?.fulltime?.home,
          fullTimeScoreAway: body?.score?.fulltime?.away,
          extraTimeScoreHome: body?.score?.extratime?.home,
          extraTimeScoreAway: body?.score?.extratime?.away,
          penaltyScoreAway: body?.score?.pelnaty?.away,
          penaltyScoreHome: body?.score?.pelnaty?.home,
          venue: <Venue>{
            name: body?.fixture?.venue?.name,
            city: body?.fixture?.venue?.city,
          },
          teams: <Team[]>[
            {
              name: body?.teams?.home?.name,
              logo: body?.teams?.home?.logo,
              winner: body?.teams?.home?.winner,
              isHome: true,
            },
            {
              name: body?.teams?.away?.name,
              logo: body?.teams?.away?.logo,
              winner: body?.teams?.away?.winner,
              isHome: false,
            },
          ],
          league: <League>{
            name: body?.league?.name,
            logo: body?.league?.logo,
            flag: body?.league?.flag,
            season: body?.league?.season,
            round: body?.league?.round,
            country: body?.league?.country,
          },
        },
    );
    return this.fixturesRepository.save(fixtures);
  }

  /**
   * Get all list fixtures
   * @param
   * @return list fixtures
   */
  async find(fixture: any): Promise<[Fixtures[], number]> {
    const { from, to } = fixture;
    return this.fixturesRepository.findAndCount({
      where: { date: Between(from, to) },
    });
  }
}
