import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseurl="http://jsonplaceholder.typicode.com/photos?_start=0&_limit=40";
@Injectable({
  providedIn: 'root'
})
export class ProvidedataService {
  
  constructor(private http: HttpClient) { }

   
  getdatafromservice():Observable<any>{
    
    return  this.http.get(baseurl);
  }
}
