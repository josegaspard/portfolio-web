export declare enum EmailStatus {
    PENDING = "pending",
    SENT = "sent",
    FAILED = "failed",
    OPENED = "opened",
    CLICKED = "clicked"
}
export declare class EmailLog {
    id: number;
    recipient: string;
    subject: string;
    templateName: string;
    status: EmailStatus;
    metadata: any;
    errorMessage: string;
    sentAt: Date;
    openedAt: Date;
    clickedAt: Date;
}
