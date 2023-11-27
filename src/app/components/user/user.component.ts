import { OperatingSystem } from './../../interfaces/operating-system';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatingSystemsService } from '../../service/operating-systems.service';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  operatingSystemsService: OperatingSystemsService = inject(OperatingSystemsService)
  operatingSystems: OperatingSystem[] = this.operatingSystemsService.getOperatingSystems();
  username: string = "Pedro";
  doesUserExist: boolean = true;
 
  isEditable: boolean = true;

  onMouseOver(cityName: string): void {
    console.log(cityName);    
  }

  emitToParent(){
    this.greet.emit("Hi! I'm your child")
  }
}
