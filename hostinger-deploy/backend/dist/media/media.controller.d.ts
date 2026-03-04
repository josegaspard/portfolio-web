import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    findAll(): Promise<import("./entities/media.entity").Media[]>;
    create(data: any): Promise<import("./entities/media.entity").Media>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
