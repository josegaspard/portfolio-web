import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) { }

    @Get()
    findAll() {
        return this.settingsService.findAll();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    update(@Body() body: { key: string; value: string }) {
        return this.settingsService.update(body.key, body.value);
    }
}

