import { Test, TestingModule } from '@nestjs/testing';
import { FixturesService } from './fixtures.service';

describe('FixturesService', () => {
  let service: FixturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixturesService],
    }).compile();

    service = module.get<FixturesService>(FixturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should no found result', async () => {
    const from = '2023-01-09T14:00:00+00:00';
    const to = '2023-01-10T14:00:00+00:00';
    const [fixtures, count] = await service.find({
      from,
      to,
      page: 1,
      limit: 10,
    });
    expect(count).toEqual(0);
  });

  it('should found result', async () => {
    const from = '2023-01-10T14:00:00+00:00';
    const to = '2023-01-15T14:00:00+00:00';
    const [fixtures, count] = await service.find({
      from,
      to,
      page: 1,
      limit: 10,
    });
    expect(count).not.toEqual(0);
  });
});
