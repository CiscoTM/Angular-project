import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Listado de empleados';

  empleados:Empleado[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  
  constructor(private route:Router, private serviceMsg:MessageService, private service:EmployeeService){
  }

  ngOnInit(): void {
    // this.empleados=this.service.empleados;
   
    this.service.findAll().subscribe(
      e=>{
        console.log(e);
        this.empleados=Object.values(e);
        this.service.setEmployees(this.empleados);
      }
    );
  }



  addEmployee(){
    let myEmployee=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.service.add(myEmployee);
  }

  updateEmployee(){
    this.route.navigate(['actualizar']);
  }


}
