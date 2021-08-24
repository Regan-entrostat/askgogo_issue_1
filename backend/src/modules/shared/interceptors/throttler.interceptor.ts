import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NetworkInterceptorModelService } from '@shared/services/network-interceptor-model.service';

@Injectable()
export class ThrottlerInterceptor extends NetworkInterceptorModelService implements NestInterceptor {

    async intercept(ctx: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
       return null
    }
}
