import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('newsletter_subscriber')
export class NewsletterSubscriber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    name: string;

    @Column({ default: true })
    active: boolean;

    @Column({ default: 'blog' })  // De dónde se suscribió (blog, footer, popup, etc)
    source: string;

    @CreateDateColumn()
    subscribedAt: Date;
}
