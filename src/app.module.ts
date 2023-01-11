import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixtures } from './models/fixtures.model';
import { League } from './models/league.model';
import { Team } from './models/team.model';
import { Venue } from './models/venue.model';
import { FixturesController } from './controllers/fixtures/fixtures.controller';
import { FixturesService } from './services/fixtures/fixtures.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      password: process.env.MYSQL_PASSWORD,
      username: process.env.MYSQL_USERNAME,
      database: process.env.MYSQL_DATABASE,
      entities: ['dist/**/*.model{.ts,.js}'],
      synchronize: true, // It will be turned off for production mode.
      logging: true,
    }),
    TypeOrmModule.forFeature([Fixtures, League, Team, Venue]),
  ],
  controllers: [FixturesController],
  providers: [FixturesService],
})
export class AppModule {}
