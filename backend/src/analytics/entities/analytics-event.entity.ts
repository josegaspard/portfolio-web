import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { UserSession } from './user-session.entity';

export enum EventType {
    // Navigation & Views
    PAGE_VIEW = 'page_view',

    // Clicks & Interactions
    CLICK_WHATSAPP = 'click_whatsapp',
    CLICK_CTA = 'click_cta',
    LINK_CLICK = 'link_click',

    // Forms
    FORM_SUBMIT = 'form_submit',
    NEWSLETTER_SIGNUP = 'newsletter_signup',
    COMMENT_POSTED = 'comment_posted',

    // Social & Sharing
    SOCIAL_SHARE = 'social_share',

    // Content Engagement
    BLOG_POST_READ = 'blog_post_read',
    VIDEO_PLAY = 'video_play',
    VIDEO_COMPLETE = 'video_complete',
    DOWNLOAD = 'download',

    // Search & Discovery
    SEARCH = 'search',

    // Behavior Tracking
    SCROLL_DEPTH = 'scroll_depth',
    TIME_ON_PAGE = 'time_on_page',
    EXIT_INTENT = 'exit_intent',
}

@Entity()
export class AnalyticsEvent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'simple-enum',
        enum: EventType,
    })
    type: EventType;

    @Column({ nullable: true })
    url: string;

    @Column({ nullable: true })
    userAgent: string;

    @Column({ nullable: true })
    ip: string;

    // Heatmap data
    @Column({ type: 'int', nullable: true })
    clickX: number;

    @Column({ type: 'int', nullable: true })
    clickY: number;

    @Column({ nullable: true })
    elementSelector: string;

    // Engagement metrics
    @Column({ type: 'int', nullable: true })
    scrollDepthPercent: number;

    @Column({ type: 'int', nullable: true })
    timeOnPageSeconds: number;

    @Column('simple-json', { nullable: true })
    payload: any;

    @CreateDateColumn()
    timestamp: Date;

    // Relation to UserSession
    @ManyToOne(() => UserSession, session => session.events, { nullable: true })
    @JoinColumn({ name: 'sessionId' })
    session: UserSession;

    @Column({ nullable: true })
    sessionId: number;
}

