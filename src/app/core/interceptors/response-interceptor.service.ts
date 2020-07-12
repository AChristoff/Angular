import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(tap((success) => {
          if (success instanceof HttpResponse) {
            if (success.body.message !== undefined) {
              console.log(success.body.message, 'Success');
            }
          }
        }), catchError((err) => {
          console.log(err.error.message, 'Error');
          throw err;
        })
      );
  }
}
