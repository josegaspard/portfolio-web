import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
export declare class MediaService {
    private mediaRepository;
    constructor(mediaRepository: Repository<Media>);
    findAll(): Promise<Media[]>;
    create(data: Partial<Media>): Promise<Media>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
