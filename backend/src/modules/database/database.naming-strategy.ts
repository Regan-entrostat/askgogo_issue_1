import { UnderscoreNamingStrategy } from '@mikro-orm/core';
import { snakeCase } from 'snake-case';

export class DatabaseNamingStrategy extends UnderscoreNamingStrategy {
    joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string {
        return snakeCase(propertyName);
    }

    joinKeyColumnName(entityName: string, referencedColumnName?: string): string {
        return `${snakeCase(entityName)}_id`;
    }
}
