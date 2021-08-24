import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('health')
    async health(): Promise<string> {
        return 'API Healthy';
    }
}
