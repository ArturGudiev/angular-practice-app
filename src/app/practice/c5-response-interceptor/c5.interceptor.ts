import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";


@Injectable()
export class C5Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    return next.handle(request).pipe(
      map(event => {
        if (event.type === HttpEventType.Response) {
          return event.clone({body: '777'})
        }
        return event;
      })
    );
  }
}
