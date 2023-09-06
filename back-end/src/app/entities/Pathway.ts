import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pathway', database: 'universe', engine: 'InnoDB' })
export default class Pathway {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 63, nullable: false, unique: true })
  name: string;
};
