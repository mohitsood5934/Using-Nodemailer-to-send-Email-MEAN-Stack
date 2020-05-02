import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }


  sendEmail(data){
    return this.http.post("http://localhost:8080/api/sendEmail",{email:data})
    .toPromise()
  }
}
