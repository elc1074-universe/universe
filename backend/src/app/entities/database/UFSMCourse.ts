import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ufsm_course', database: 'universe', engine: 'InnoDB' })
export default class UFSMCourse {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false, unique: false })
  name: string;

  @Column({ name: 'site', type: 'varchar', length: 255, nullable: false, unique: false })
  site: string;

  @Column({ name: 'level', type: 'varchar', length: 9, nullable: false, unique: false })
  level: string;
};
