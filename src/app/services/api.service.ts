import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBase } from '../interfaces/IBase';
import { IRaca } from '../interfaces/IRaca';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://dog.ceo/api/';

  constructor(private http: HttpClient) {
  }

  fetchData(endpoint: string): Observable<IBase<IRaca>> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<IBase<IRaca>>(url);
  }

}
