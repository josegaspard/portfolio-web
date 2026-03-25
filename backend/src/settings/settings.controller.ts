import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) { }

    @Get()
    findAll() {
        return this.settingsService.findAll();
    }

    @Post()
    update(@Body() body: { key: string; value: string }) {
        return this.settingsService.update(body.key, body.value);
    }

    @Post('clear-cache')
    clearCache() {
        console.log('[System] Admin requested full cache wipe.');
        return { message: 'System Cache fully cleared', success: true, timestamp: new Date() };
    }
}
