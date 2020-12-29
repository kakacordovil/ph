import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile')
export default class Profile{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    username: string;
}