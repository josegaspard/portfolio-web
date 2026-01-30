import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Subscriber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    name: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    source: string; // e.g., 'footer', 'blog_popup', 'contact_form'

    @CreateDateColumn()
    subscribedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
