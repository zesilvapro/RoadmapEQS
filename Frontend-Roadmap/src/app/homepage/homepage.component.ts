import { Component } from '@angular/core';
import { RegisterService } from '../services/registerService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private registerService: RegisterService) {}

  get register(): boolean {
    return this.registerService.getRegister();
  }
}
