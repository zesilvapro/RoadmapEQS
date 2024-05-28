import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Data/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly baseUrl = 'http://localhost:5138/api/Task';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getAllTasks(): Observable<Task[]> {
    const url = `${this.baseUrl}/GetallTasks`;
    return this.http.get<Task[]>(url);
  }

  public getTaskById(id: number): Observable<Task> {
    const url = `${this.baseUrl}/GetTaskByID${id}`;
    return this.http.get<Task>(url);
  }

  public addTask(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/CreateTask`;
    return this.http.post<Task>(url, task, this.httpOptions);
  }

  public updateTask(id: number, task: Task): Observable<void> {
    const url = `${this.baseUrl}/UpdateTask/${id}`;
    return this.http.put<void>(url, task, this.httpOptions);
  }

  public deleteTask(id: number): Observable<void> {
    const url = `${this.baseUrl}/DeleteTask/${id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }
}
