import { EntityRepository, Repository } from '@mikro-orm/core';
import { AdminUser } from '@entities';

@Repository(AdminUser)
export class AdminUserRepository extends EntityRepository<AdminUser> {}
