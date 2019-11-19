import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empd } from './empd';
 
@Injectable({
  providedIn: 'root'
})
export class EmpsService {
  getdep(x: any) {
    let url="http://localhost:8081/msel?xyz="+x;
    return this.aj.get(url);
  }
  dele(x: any) {
    let url="http://localhost:8081/del?xyz="+x;
    
    return this.aj.get(url);
  }
  update(eobj: Empd) {
    let url="http://localhost:8081/upd";
    
    return this.aj.post(url,eobj);
  }
  insert(x:Empd) {
    let url="http://localhost:8081/ins";
    
    return this.aj.post(url,x);
  }

  constructor(private aj:HttpClient) 
  {}
  ssel(x:any):Observable<any>
  {
     let url="http://localhost:8081/ssel?xyz="+x;
     return this.aj.get(url);
  }
  id():Observable<any>
  {
     let url="http://localhost:8081/sid";
     return this.aj.get(url);
  }
  sal():Observable<any>
  {
     let url="http://localhost:8081/ss";
     return this.aj.get(url);
  }
}
