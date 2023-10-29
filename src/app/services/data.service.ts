import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMessage(){
    return "bonjour le monde depuis le data service ";
  }
  
}
