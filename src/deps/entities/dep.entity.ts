import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('deps')
export class DepsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}