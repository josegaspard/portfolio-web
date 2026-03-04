import { UserSession } from './user-session.entity';
export declare enum EventType {
    PAGE_VIEW = "page_view",
    CLICK_WHATSAPP = "click_whatsapp",
    CLICK_CTA = "click_cta",
    LINK_CLICK = "link_click",
    FORM_SUBMIT = "form_submit",
    NEWSLETTER_SIGNUP = "newsletter_signup",
    COMMENT_POSTED = "comment_posted",
    SOCIAL_SHARE = "social_share",
    BLOG_POST_READ = "blog_post_read",
    VIDEO_PLAY = "video_play",
    VIDEO_COMPLETE = "video_complete",
    DOWNLOAD = "download",
    SEARCH = "search",
    SCROLL_DEPTH = "scroll_depth",
    TIME_ON_PAGE = "time_on_page",
    EXIT_INTENT = "exit_intent"
}
export declare class AnalyticsEvent {
    id: number;
    type: EventType;
    url: string;
    userAgent: string;
    ip: string;
    clickX: number;
    clickY: number;
    elementSelector: string;
    scrollDepthPercent: number;
    timeOnPageSeconds: number;
    payload: any;
    timestamp: Date;
    session: UserSession;
    sessionId: number;
}
