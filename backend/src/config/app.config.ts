export enum Environment {
    Production,
    Testing,
    Staging,
    Development,
}

function getEnvironment(environmentEnv: string): Environment {
    switch (environmentEnv) {
        case 'dev':
            return Environment.Development;
        case 'development':
            return Environment.Development;
        case 'testing':
            return Environment.Testing;
        case 'staging':
            return Environment.Staging;
        case 'prod':
            return Environment.Production;
        case 'production':
            return Environment.Production;
        default:
            return Environment.Production;
    }
}

export const AppConfig = {
    environment: getEnvironment(process.env.ENV),
    apiPrefix: 'api/v1',
    port: parseInt(process.env.PORT || '3000', 10),
    timezone: process.env.TIMEZONE || 'Africa/Harare',
    url: process.env.APP_URL || 'http://localhost:8080',
    relativeUrl: (endpoint: string = '') => `/${AppConfig.apiPrefix}${endpoint ? `/${endpoint.replace(new RegExp('^/'), '')}` : ''}`,
    fullUrl: (endpoint: string = '') => `${AppConfig.url}/${AppConfig.apiPrefix}${endpoint ? `/${endpoint.replace(new RegExp('^/'), '')}` : ''}`,
    env: {
        env: process.env.ENV,
        isProd: getEnvironment(process.env.ENV) === Environment.Production,
        isDev: getEnvironment(process.env.ENV) === Environment.Development,
        isTesting: getEnvironment(process.env.ENV) === Environment.Testing,
        isStaging: getEnvironment(process.env.ENV) === Environment.Staging,
    },
    hostUser: process.env.HOST_USER || 'unknown',
    sessionSecret: process.env.SESSION_SECRET || 'top-secret',
    appTitle: process.env.APP_TITLE || 'AskGogo',
};
