import { ViolationEntity } from 'src/violations/entities/violation.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('violaDetail')
export class ViolaDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url_foto: string;

    @Column({nullable: true})
    coordinates?: string;

    @Column({nullable: true})
    description?: string;

    @ManyToOne(()=> ViolationEntity, {nullable: false})
    @JoinColumn({name: 'viola_id'})
    violation: ViolationEntity;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: string;

    @CreateDateColumn({type: 'timestamp'})
    updatedAt: string;

}