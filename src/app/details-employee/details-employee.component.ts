import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent {

  @Output() employeeCharacters = new EventEmitter<string>();

  constructor(private serviceMessage:MessageService){}

  setCharacters(value:string){
    this.serviceMessage.showMsg(value);
    this.employeeCharacters.emit(value); 
  }

  

}
