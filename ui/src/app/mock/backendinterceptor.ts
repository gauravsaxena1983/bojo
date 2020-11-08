import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData } from './mockdata';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method === 'GET' &&  request.url === 'http://localhost:2456/api/meta/user') {
            return of(new HttpResponse(
                {
                    status: 200,
                    body: MockData.getUserMeta()
            }));
        }

        if (request.method === 'GET' &&  request.url === 'http://localhost:2457/api/data/user') {
            return of(new HttpResponse(
                {
                    status: 200,
                    body: MockData.getUserData()
            }));
        }

        if (request.method === 'GET' &&  request.url.startsWith('http://localhost:2457/api/data/user/')) {

            const userId = request.url.substr(request.url.lastIndexOf('/') + 1, (request.url.length - request.url.lastIndexOf('/')));

            const user = MockData.getUserData(userId);

            if (user) {
                return of(new HttpResponse(
                    {
                        status: 200,
                        body: user[0]
                }));
            } else {
                return of(new HttpResponse(
                    {
                        status: 404
                    }
                ));
            }

            
        }

        next.handle(request);

    }
}
