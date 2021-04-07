import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  '*'
    })
  };
  constructor(private http: HttpClient) { }

  retrieveProducts(): Observable<any> {
    return this.http.get(environment.url + "dummy/products", this.httpOptions);
  }
}
