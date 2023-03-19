import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private serviceMsg:MessageService,private serviceData:DataService){

  }

  // empleados:Array<Empleado>=[
  empleados:Empleado[]=[ 

    //   new Empleado("Juan","Diaz","Presidente",7500),
    //   new Empleado("Ana","Martin","Director",5500),
    //   new Empleado("Antonio","Fdez","Encargado",3500),
    //   new Empleado("Fco","Tortillol","Desarrollador",2050)
  
   ];

   setEmployees(e:Empleado[]){
    this.empleados=e;
   }

    add(empleado:Empleado){
      this.serviceMsg.showMsg(empleado.nombre + "\n"  + empleado.cargo);
      this.empleados.push(empleado);
      this.serviceData.save(this.empleados);
    }

    findEmployeeById(i:number):Empleado{
       let empleado:Empleado=this.empleados[i];
       return empleado;
    }

    findAll(){
      return this.serviceData.findAll();
    }

    update(empleado:Empleado,indice:number){
      let employer=this.empleados[indice];
      
      employer.nombre=empleado.nombre;
      employer.apellido=empleado.apellido;
      employer.cargo=empleado.cargo;
      employer.salario=empleado.salario;

      this.serviceData.update(indice,empleado);

     }

     delete(i:number){
      
      this.empleados.splice(i,1);

      this.serviceData.delete(i);

      if(this.empleados!=null)
      this.serviceData.save(this.empleados);

     }

}
