import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import { Content } from '../../content/entities/content.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    authorName: string;

    @Column({ nullable: true })
    authorEmail: string;

    @Column({ nullable: true })
    authorAvatar: string;

    @Column({ default: false })
    isApproved: boolean;

    @ManyToOne(() => Content)
    post: Content;

    @CreateDateColumn()
    createdAt: Date;
}
