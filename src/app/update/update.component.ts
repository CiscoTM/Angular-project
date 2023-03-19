import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  btntitulo:string='';
  accion:Number;
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;

  ngOnInit(): void {
    this.accion=this.route.snapshot.queryParams['accion'];
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.service.findEmployeeById(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

    (this.accion==1) ?  this.btntitulo='Actualizar' : this.btntitulo='Eliminar';

  }

  constructor(private router:Router, private serviceMsg:MessageService,
              private service:EmployeeService, private route:ActivatedRoute
              ){}


  backHome(){
    this.router.navigate(['']);
  }

 
  //  updateEmployee(){
  //    let myEmployee=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //   this.service.update(myEmployee,this.indice);
  //   this.backHome();
  //  }

  //  deleteEmployee(){
  //   this.service.delete(this.indice);
  //   this.backHome();
  //  }

    operate(){
      let myEmployee=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      if(this.accion==1){
        this.btntitulo='Actualizar';
        this.service.update(myEmployee,this.indice);
        this.backHome();
      } else {
        this.btntitulo='Actualizar';
        this.service.delete(this.indice);
        this.backHome();
      }
      
      
   }



}
