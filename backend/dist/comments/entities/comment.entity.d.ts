import { Content } from '../../content/entities/content.entity';
export declare class Comment {
    id: number;
    content: string;
    authorName: string;
    authorEmail: string;
    authorAvatar: string;
    isApproved: boolean;
    post: Content;
    createdAt: Date;
}
