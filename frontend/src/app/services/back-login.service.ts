import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { classLogin } from './classAuth';
import { token } from './tokenAuth';

@Injectable({
  providedIn: 'root'
})
export class BackLoginService {

  constructor(private httpClient: HttpClient) { }

  public log(classLogin: classLogin): Observable<token>{
    return this.httpClient.post<token>('http://localhost:2000/signin', classLogin)
  }
}
