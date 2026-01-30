import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('contact_message')
export class ContactMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    company: string;

    @Column({ nullable: true })  // Hacer service opcional
    service: string;

    @Column('text')
    message: string;

    @Column({ default: 'contact_form' })  // Nuevo: identificar origen (contact_form, newsletter, etc)
    source: string;

    @Column({ default: false })
    read: boolean;

    @Column({ default: false })
    replied: boolean;

    @Column('text', { nullable: true })
    adminReply: string;

    @CreateDateColumn()
    createdAt: Date;
}
