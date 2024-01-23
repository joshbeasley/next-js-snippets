import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Snippet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  code: string;
}
