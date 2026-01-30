import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) { }

    async create(data: any) {
        const comment = this.commentRepository.create(data);
        return this.commentRepository.save(comment);
    }

    async getByPost(postId: number) {
        return this.commentRepository.find({
            where: { post: { id: postId }, isApproved: true },
            order: { createdAt: 'DESC' },
        });
    }

    async approve(id: number) {
        return this.commentRepository.update(id, { isApproved: true });
    }

    async delete(id: number) {
        return this.commentRepository.delete(id);
    }
}
