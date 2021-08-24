import { ProfanityRepository } from "@shared/repositories/profanity.repository";
import { Profanity } from "@entities/admin/profanity.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfanityCheckService {
  constructor(private profanityRepository: ProfanityRepository) {}

  async containsProfanity(
    strings: string[]
  ): Promise<{ check: boolean; terms: Profanity[] }> {
    return null;
  }
}
