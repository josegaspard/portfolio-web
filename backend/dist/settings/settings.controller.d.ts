import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): Promise<import("./entities/setting.entity").Setting[]>;
    update(body: {
        key: string;
        value: string;
    }): Promise<import("./entities/setting.entity").Setting>;
}
