import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Page } from 'src/models/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }
  getAll(datePost:string):Observable<any>{
    
   return  this.httpClient.get<any>(`assets/TF1-${datePost}.json`)
    
  }


  
}
