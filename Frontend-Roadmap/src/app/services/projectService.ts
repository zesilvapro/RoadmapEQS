import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../Data/Project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly roadmapUrl = 'http://localhost:5138/api/Project';

  // Define httpOptions
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public addProject(project: Projects): Observable<Projects> {
    const url = `${this.roadmapUrl}/CreateProject`;
    return this.http.post<Projects>(url, project, this.httpOptions);
  }
}
