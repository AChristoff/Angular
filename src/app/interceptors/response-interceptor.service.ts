import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(tap((success) => {
        console.log(success);
        if (success instanceof HttpResponse) {
          this.toastr.success(success.body.message, 'Success');
        }
        console.log(success);
        }), catchError((err) => {
        this.toastr.error(err.error.message, 'Error');
          throw err;
        })
      );
  }
}
