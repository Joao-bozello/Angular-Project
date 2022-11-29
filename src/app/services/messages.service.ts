import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagem: string = ''

  constructor() { }

  add(messagem : string){
    this.messagem = messagem;

    setTimeout(() =>{
      this.clear();
    }, 4000);
  }


  clear(){
    this.messagem = ''
  }
}

