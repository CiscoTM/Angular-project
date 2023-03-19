import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './auth/login.service';
import { Empleado } from './empleado.model';

@Injectable()
export class DataService {

  constructor(private http:HttpClient,private auth:LoginService) {}

  save(empleados:Empleado[]){
    this.http.put('https://employees-tk3-default-rtdb.europe-west1.firebasedatabase.app/data.json',empleados).subscribe(
      response=>console.log('Se han guardado los empleados '+Object.values(response)),
      error => console.log("Error: "+error),
    );
  }

  update(i:number,e:Empleado){
   let url= 'https://employees-tk3-default-rtdb.europe-west1.firebasedatabase.app/data/'+i+'.json';
   this.http.put(url,e).subscribe(
    response=>console.log('Se han Actualizado correctamente el empleados '+Object.values(response)),
      error => console.log("Error: "+error),
   );
  }

  delete(i:number){
    let url= 'https://employees-tk3-default-rtdb.europe-west1.firebasedatabase.app/data/'+i+'.json';
    this.http.delete(url).subscribe(
     response=>console.log('Se han borrado correctamente el empleados '+Object.values(response)),
       error => console.log("Error: "+error),
    );
   }



  findAll(){
    const token = this.auth.getIdToken();
    return this.http.get('https://employees-tk3-default-rtdb.europe-west1.firebasedatabase.app/data.json?auth='+token);
  }

  
}
