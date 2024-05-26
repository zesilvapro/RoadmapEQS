import { Users } from './../Data/Users';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: string;
  username: string ;
}


@Injectable({
    providedIn: 'root'
  })
  export class RoadmapService {
    private readonly roadmapUrl = "http://localhost:5138/api/Users";
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };



    constructor(private http: HttpClient) { }



    public getAllUsers(): Observable<Users[]> {
      const url = `${this.roadmapUrl}/GetAllUsers`;
      return this.http.get<Users[]>(url);
    }

    public registerUser(userData: any): Observable<Users[]> {
      const url = `${this.roadmapUrl}/RegisterUser`;
      return this.http.post<Users[]>(url, userData, this.httpOptions);
    }

    public loginUser(email: string, password: string): Observable<User> {
      const url = `${this.roadmapUrl}/LoginUser`;
      const userData = { email, password };
      return this.http.post<User>(url, userData);
    }


  }
