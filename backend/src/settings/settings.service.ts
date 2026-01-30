import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
    constructor(
        @InjectRepository(Setting)
        private settingsRepository: Repository<Setting>,
    ) { }

    async findAll() {
        return this.settingsRepository.find();
    }

    async findByKey(key: string) {
        return this.settingsRepository.findOneBy({ key });
    }

    async update(key: string, value: string) {
        let setting = await this.findByKey(key);
        if (setting) {
            setting.value = value;
        } else {
            setting = this.settingsRepository.create({ key, value });
        }
        return this.settingsRepository.save(setting);
    }
}

