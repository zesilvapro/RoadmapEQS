
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  registerUser = false;
  name: string | null = null;
}
