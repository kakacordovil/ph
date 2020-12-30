import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('posts')
export default class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    content: string;
}
