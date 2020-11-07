import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BObjectList } from '../common/bobject-list';
import { ApiEndPoints } from '../common/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class BObjectDataService {

  constructor(private http: HttpClient) { }

  list(name: string): Observable<BObjectList> {
    return this.http.get<BObjectList>(ApiEndPoints.data + name);
  }

  id(name: string, id: number): Observable<any> {
    return this.http.get<any>(ApiEndPoints.data + name + '/' + id);
  }
}
