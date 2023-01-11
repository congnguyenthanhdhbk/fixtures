import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Manage stadium information
 */
@Entity()
export class Venue extends BaseModel {
  @ApiProperty()
  @Column({ nullable: true })
  name: string; // name of stadium
  @ApiProperty()
  @Column({ nullable: true })
  city: string; // city where stadium is base on
}
