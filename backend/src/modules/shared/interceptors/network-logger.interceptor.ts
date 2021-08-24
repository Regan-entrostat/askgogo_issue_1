import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { NetworkInterceptorModelService } from "@shared/services/network-interceptor-model.service";
import { Observable } from "rxjs";

@Injectable()
export class NetworkLoggerInterceptor
  extends NetworkInterceptorModelService
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return undefined;
  }
}
