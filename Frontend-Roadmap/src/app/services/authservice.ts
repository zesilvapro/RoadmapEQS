import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable();
  private userName: string | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('api/login', { email, password }).pipe(
      tap(response => {
        const user = response.user; // Assuming response contains user data
        this.userName = user.name; // Assuming user object has a 'name' property
        this.userSubject.next(user);
      })
    );
  }

  logout() {
    this.userSubject.next(null);
    this.userName = null;
  }

  getUserName(): string | null {
    return this.userName;
  }

}
