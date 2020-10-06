import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export abstract class StudentsTableData {
  url="http://localhost:3000/students";

  constructor(private http: HttpClient) {  }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
 
  
  }
  
