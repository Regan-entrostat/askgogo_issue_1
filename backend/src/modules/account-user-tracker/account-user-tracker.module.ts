import { Module } from '@nestjs/common';
import { AccountUserTrackerService } from './account-user-tracker.service';

@Module({
    providers: [AccountUserTrackerService],
    exports: [AccountUserTrackerService],
})
export class AccountUserTrackerModule {}
