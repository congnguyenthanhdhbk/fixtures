import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model';

/**
 * Manage stadium information
 */
@Entity()
export class Venue extends BaseModel {
  @Column({ nullable: true })
  name: string; // name of stadium
  @Column({ nullable: true })
  city: string; // city where stadium is base on
}
