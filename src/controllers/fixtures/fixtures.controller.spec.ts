import { Test, TestingModule } from '@nestjs/testing';
import { FixturesController } from './fixtures.controller';
import { raw } from 'express';

describe('FixturesController', () => {
  let controller: FixturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixturesController],
    }).compile();

    controller = module.get<FixturesController>(FixturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should test interation', async () => {
    const from = '2023-01-09T14:00:00+00:00';
    const to = '2023-01-10T14:00:00+00:00';
    const [result, count] = await controller.filterByCondition(from, to, 1, 10);
    expect(count).toEqual(0);
  });
});
