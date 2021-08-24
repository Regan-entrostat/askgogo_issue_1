import { EntityRepository, Repository } from '@mikro-orm/core';
import { Device } from '@entities';

@Repository(Device)
export class DeviceRepository extends EntityRepository<Device> {}
