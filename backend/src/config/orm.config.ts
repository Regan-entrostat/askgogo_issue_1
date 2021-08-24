
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { DatabaseNamingStrategy } from '@database/database.naming-strategy';

type AdditionalOrmOptions = {
    migrations: {
        pathTs: string;
    };
};

export const OrmConfig: MikroOrmModuleOptions & AdditionalOrmOptions = {
    entities: [`./dist/modules/database/**/*.entity.js`],
    entitiesTs: [`./src/modules/database/**/*.entity.ts`],
    dbName: 'test',
    host: 'localhost',
    password: 'test',
    port: 33000,
    user: 'test',
    type: 'postgresql',
    metadataProvider: TsMorphMetadataProvider, // More advanced reflection of entities (see: https://mikro-orm.io/docs/metadata-providers)
    debug: ['info'],
    highlighter: new SqlHighlighter(),
    implicitTransactions: true,
    forceUtcTimezone: true,
    registerRequestContext: false,
    namingStrategy: DatabaseNamingStrategy,
    migrations: {
        tableName: 'migrations',
        path: './dist/modules/database/migrations',
        pathTs: './src/modules/database/migrations',
        pattern: /^Migration\d+-.+\.js$/, // regex pattern for the migration files
        transactional: true, // wrap each migration in a transaction
        allOrNothing: true, // wrap all migrations in master transaction
        emit: 'ts',
    },
};

export default OrmConfig;
