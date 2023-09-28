import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'personality', database: 'universe', engine: 'InnoDB' })
export default class Personality {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'letter', type: 'char', length: 1, nullable: false, unique: true })
  letter: string;

  @Column({ name: 'name', type: 'varchar', length: 15, nullable: false, unique: true })
  name: string;

  @Column({ name: 'description', type: 'varchar', length: 255, nullable: false, unique: true })
  description: string;

  @Column({ name: 'story_title', type: 'varchar', length: 63, nullable: false, unique: true })
  storyTitle: string;

  @Column({ name: 'story_description', type: 'varchar', length: 511, nullable: false, unique: true })
  storyDescription: string;
};
