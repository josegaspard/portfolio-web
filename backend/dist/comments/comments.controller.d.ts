import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(body: any): Promise<import("./entities/comment.entity").Comment[]>;
    getByPost(postId: number): Promise<import("./entities/comment.entity").Comment[]>;
    approve(id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
