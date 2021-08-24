import { Injectable } from '@nestjs/common';
import { DeviceRepository } from './respositories/device.repository';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class DeviceService {
    constructor(private deviceRepository: DeviceRepository, private em: EntityManager) {
        this.em = this.em.fork(true);
    }

}
