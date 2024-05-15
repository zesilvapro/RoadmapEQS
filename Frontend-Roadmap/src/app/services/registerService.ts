import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register: boolean = false;

  constructor() { }

  setRegister(value: boolean) {
    this.register = value;
  }

  getRegister() {
    return this.register;
  }
}
