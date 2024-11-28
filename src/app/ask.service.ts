import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AskService {

  http: HttpClient = inject(HttpClient)
  constructor() { }

  ask(question:string){
    return this.http.post("http://localhost:5000/api/ask",{question:question});
  }
}
