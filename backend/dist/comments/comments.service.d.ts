import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(data: any): Promise<Comment[]>;
    getByPost(postId: number): Promise<Comment[]>;
    approve(id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
