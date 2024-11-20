import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(public http:HttpClient) { }
  
  displayAll(){
  return this.http.get("http://localhost:3000/student")
  }
  addstudent(s:any){
    return this.http.post("http://localhost:3000/student",s)
  }
  deletestudent(sid:number){
    return this.http.delete("http://localhost:3000/student/"+sid)
  }
  getsinglestudent(sid:any){
    return this.http.get("http://localhost:3000/student/"+sid)
  }
  putstudent(std:any){
    return this.http.put("http://localhost:3000/student/"+std.id,std)
  }
}
