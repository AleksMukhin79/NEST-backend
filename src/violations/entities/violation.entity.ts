import { DepsEntity } from 'src/deps/entities/dep.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('violations')
export class ViolationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    violator?: string;

    @Column({nullable: true})
    tab_num?: number

    @Column({nullable: true})
    declarant?: string;

    @ManyToOne(()=> DepsEntity, {nullable: false})
    @JoinColumn({name: 'deps_id'})
    deps: DepsEntity;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: string;

    @CreateDateColumn({type: 'timestamp'})
    updatedAt: string;

    @Column({default: 0})
    views?: number;

}