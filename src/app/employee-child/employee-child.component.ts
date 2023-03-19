import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent {

  constructor(){}

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;


  charactersArray=[''];

  addCharacter(newCharacter:string){
    this.charactersArray.push(newCharacter);
  }




}
