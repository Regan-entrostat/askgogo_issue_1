import { Entity, Enum, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Timestamped } from '@entities';

export enum Language {
    English = 'English',
    Xhosa = 'Xhosa',
    Zulu = 'Zulu',
    Multilingual = 'Multilingual',
}

@Entity()
export class Profanity extends Timestamped {
    @PrimaryKey()
    profanity: number;

    @Property()
    word: string;

    @Enum({ items: () => Language, default: Language.Multilingual })
    language: Language;
}
