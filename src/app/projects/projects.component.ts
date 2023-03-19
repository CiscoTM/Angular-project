import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router:Router,private serviceMsg:MessageService, private service:EmployeeService){}
  
  
  empleados:Array<Empleado>=[];
  
  ngOnInit(): void {
    this.empleados=this.service.empleados;
  }


  backHome(){
    this.router.navigate(['']);
  }

  addEmployee(){
    let myEmployee=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.backHome();
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
