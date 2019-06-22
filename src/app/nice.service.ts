import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NiceService {
  public domain:string="https://q01vs-api.xhijvkodxaljlqnjcpku.com/";
  constructor(public http:HttpClient) { 
  }
  get(url){
    return new Promise((resolve,reject)=>{
      this.http.get(this.domain+url).subscribe((response)=>{
        resolve(response)
      })
    })
  }

  transformRequest(obj:any){
    let arr= [];
     for(let name in obj){
       arr.push(""+name+"="+obj[name]);
     }
     return arr.join('&');
   }

  post(url,data){
    const httpOptions={headers:new HttpHeaders({'Content-Type':' application/x-www-form-urlencoded;charset=utf-8'})};
    // console.log(data); 
    return new Promise((resolve,reject)=>{
      this.http.post(this.domain+url,this.transformRequest(data),httpOptions).subscribe((response)=>{
        resolve(response)
      })
    })
  }

}
