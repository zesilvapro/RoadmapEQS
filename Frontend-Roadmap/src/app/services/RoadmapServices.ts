import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Users } from '../Data/Users';


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

    public loginUser(email: string, password: string): Observable<Users[]> {
      const url = `${this.roadmapUrl}/loginUser`;
      const userData = { email, password };
      return this.http.post<Users[]>(url, userData, this.httpOptions);
    }
    

  /*
    public getSensorById(id: string): Observable<Sensor> {
      const params = {sensorId: id};
      const url = `${this.sensorsUrl}/GetSensorById`;
      return this.http.get<Sensor>(url, {params});
    }
  
    public listSensors(searchQuery: string, orderBy: string, direction: number): Observable<Sensor> {
      const params = {
        searchQuery: searchQuery,
        orderBy: orderBy,
        direction: direction
      };
      const url = `${this.sensorsUrl}/ListSensors`;
      return this.http.get<Sensor>(url, {params});
    }
  
    public CreateGame(tabuleiro: Tabuleiro): Observable<any> {
      const url = `${this.tabuleiroUrl}/CreateGame`;
  
      return this.http.post(url, tabuleiro, this.httpOptions);
  
    }
   
  
    public addSensorData(sensorId: string, sensorData: SensorData[]): Observable<any> {
      const url = `${this.sensorsUrl}/data/Add`;
      return this.http.post(`${url}?sensorId=${sensorId}`, sensorData, this.httpOptions);
    }
 
  
  public UpdateGame(tabuleiro: Tabuleiro, row: number, col: number): Observable<any> {
    const url = `${this.tabuleiroUrl}/UpdateGame`;
    const playData = { tabuleiro, row, col }; // Object containing game state and player's move
    return this.http.post(url, playData, this.httpOptions);
  }
  
  /*
    public addRemoveFavouriteSensor(favouriteSensor : FavouriteSensor): Observable<any> {
      const url = `${this.sensorsUrl}/AddOrRemoveSensorAsFavourite`;
      return this.http.post(url, favouriteSensor, this.httpOptions);
    }
  
    public checkIfSensorIsFavourite(sensorId: string): Observable<IsSensorFavourite> {
      const url = `${this.sensorsUrl}/CheckIfSensorIsFavourite`;
      return this.http.get<IsSensorFavourite>(`${url}?sensorId=${sensorId}`);
    }
  
    public getFavouriteSensorsData(fromDate: Date, toDate: Date): Observable<FavouriteSensorsDataDto[]> {
      const params = new HttpParams()
                      .set('fromDate', fromDate.toISOString())
                      .set('toDate', toDate.toISOString());
      const url = `${this.sensorsUrl}/data/GetFavouriteSensorsData`;
      return this.http.get<FavouriteSensorsDataDto[]>(url, {params});
    }
  
    public getSensorsByUser(userId: string): Observable<Sensor[]> {
      const url = `${this.sensorsUrl}/GetListOfSensorsByUser`;
      return this.http.get<Sensor[]>(url+'?userId='+userId);
    }
    */
  }
  