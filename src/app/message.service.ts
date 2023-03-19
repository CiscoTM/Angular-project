import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showMsg(msg:string){
    alert(msg);
  }
}
