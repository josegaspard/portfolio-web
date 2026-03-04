import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';
export declare class SettingsService {
    private settingsRepository;
    constructor(settingsRepository: Repository<Setting>);
    findAll(): Promise<Setting[]>;
    findByKey(key: string): Promise<Setting | null>;
    update(key: string, value: string): Promise<Setting>;
}
