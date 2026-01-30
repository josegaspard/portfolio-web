import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { AnalyticsEvent } from './analytics-event.entity';

@Entity()
export class UserSession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    sessionId: string; // UUID

    @Column({ nullable: true })
    ip: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    region: string;

    @Column({ type: 'text', nullable: true })
    userAgent: string;

    @Column({ nullable: true })
    device: string; // mobile, desktop, tablet

    @Column({ nullable: true })
    browser: string;

    @Column({ nullable: true })
    browserVersion: string;

    @Column({ nullable: true })
    os: string;

    @Column({ nullable: true })
    osVersion: string;

    @Column({ nullable: true })
    referrer: string;

    @Column({ nullable: true })
    landingPage: string;

    @Column({ nullable: true })
    language: string;

    @Column({ type: 'int', default: 0 })
    pageViews: number;

    @Column({ type: 'int', nullable: true })
    durationSeconds: number;

    @CreateDateColumn()
    startedAt: Date;

    @UpdateDateColumn()
    lastActivityAt: Date;

    @Column({ nullable: true })
    endedAt: Date;

    @OneToMany(() => AnalyticsEvent, event => event.session)
    events: AnalyticsEvent[];
}
