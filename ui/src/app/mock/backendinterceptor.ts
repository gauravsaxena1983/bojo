import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
class BackendInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method === 'GET' &&  request.url === 'http://localhost:2456/api/meta/user') {
            return of(new HttpResponse(
                {
                    status: 200,
                    body: {
                        name: 'user',
                        text: 'User',
                        fields : [
                            {
                                name: 'id',
                                text: 'Id',
                                type: 'number',
                                readonly: true
                            },
                            {
                                name: 'email',
                                text: 'Email',
                                type: 'string'
                            },
                            {
                                name: 'title',
                                text: 'Title',
                                type: 'option',
                                values: [
                                    'Mr.',
                                    'Ms.',
                                    'Miss.',
                                    'Dr.'
                                ]
                            },
                            {
                                name: 'firstname',
                                text: 'First Name',
                                type: 'string'
                            },
                            {
                                name: 'lastname',
                                text: 'Last Name',
                                type: 'string'
                            },
                            {
                                name: 'active',
                                text: 'IsActive',
                                type: 'bool'
                            },
                            {
                                name: 'aboutme',
                                text: 'About Me',
                                type: 'mstring'
                            },
                            {
                                name: 'createdby',
                                text: 'Created By',
                                type: 'ref'
                            },
                            {
                                name: 'updatedby',
                                text: 'Updated By',
                                type: 'ref'
                            },
                            {
                                name: 'updateddate',
                                text: 'Updated Date',
                                type: 'date'
                            },
                            {
                                name: 'createddate',
                                text: 'Created Date',
                                type: 'date'
                            }
                        ],
                        layouts: [
                            {
                                name: 'default'
                            }
                        ]
                    }
            }));
        }

        next.handle(request);

    }
}
