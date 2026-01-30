import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('analytics_event')
export class AnalyticsEvent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventName: string; // 'page_view', 'button_click', 'link_click', 'form_submit'

    @Column('simple-json', { nullable: true })
    data: any; // Datos adicionales del evento

    @Column()
    url: string; // URL donde ocurrió el evento

    @Column({ nullable: true })
    userAgent: string;

    @Column({ nullable: true })
    ip: string;

    @CreateDateColumn()
    timestamp: Date;
}
