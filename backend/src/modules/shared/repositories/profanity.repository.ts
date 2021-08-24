import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Language, Profanity } from '@entities/admin/profanity.entity';

@Repository(Profanity)
export class ProfanityRepository extends EntityRepository<Profanity> {
    async getProfanity(profanity: string, language: Language[] = [...Object.values(Language)]): Promise<Profanity> {
        return await this.findOne({ $and: [{ word: profanity }, { language: { $in: language } }] });
    }
}
