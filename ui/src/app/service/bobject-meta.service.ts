import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BObjectMeta } from '../common/bobject-meta';
import { ApiEndPoints } from '../common/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class BObjectMetaService {

  constructor(private http: HttpClient) { }

  meta(name: string): Observable<BObjectMeta> {
    return this.http.get<BObjectMeta>(ApiEndPoints.meta + name);
  }
}
