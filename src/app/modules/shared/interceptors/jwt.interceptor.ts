import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';
import { JWT_KEY } from '../../../constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private readonly storageService: StorageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers.set('Content-Type', 'application/json');

    const jwt: string = this.storageService.getItem(JWT_KEY);

    if (jwt) {
      headers = headers.set('Authorization', `Bearer ${jwt}`);
    }

    const authReq = request.clone({ headers });

    return next.handle(authReq);
  }
}
