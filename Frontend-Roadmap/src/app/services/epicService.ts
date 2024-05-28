import { Epic } from './../Data/Epic';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EpicService {

  private readonly roadmapUrl = 'http://localhost:5138/api/Epic';

  // Define httpOptions
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getAllEpics(): Observable<Epic[]> {
    const url = `${this.roadmapUrl}/GetAllEpics`;
    return this.http.get<Epic[]>(url);
  }

  public addEpic(epic: Epic): Observable<Epic> {
    const url = `${this.roadmapUrl}/CreateEpic`;
    return this.http.post<Epic>(url, epic, this.httpOptions);
  }


}
