import { OperatingSystem } from './../interfaces/operating-system';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {
  operatingSystems : OperatingSystem[] = [
    {
      id: 'win',
      name: 'Windosw'     
    },
    {
      id: 'osx',
      name: 'MacOs'     
    },
    {
      id: 'linux',
      name: 'Linux'
    }
  ]; 
  constructor() { }
  getOperatingSystems(): OperatingSystem[]{
    return this.operatingSystems
  }
}
