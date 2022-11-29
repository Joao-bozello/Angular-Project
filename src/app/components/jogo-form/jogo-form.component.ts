import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Jogo } from 'src/app/Jogo';

@Component({
  selector: 'app-jogo-form',
  templateUrl: './jogo-form.component.html',
  styleUrls: ['./jogo-form.component.css']
})
export class JogoFormComponent {
  @Output() onSubmit = new EventEmitter<Jogo>();
  @Input() btnText!: string;
  @Input() jogoData: Jogo | null = null

  jogoForm!: FormGroup;
  

  constructor(){

  }

  ngOnInit(): void{
    this.jogoForm = new FormGroup({
      id: new FormControl(this.jogoData ? this.jogoData.id : ''),
      nome: new FormControl(this.jogoData ? this.jogoData.nome : '', [Validators.required]),
      desenvolvedora: new FormControl(this.jogoData ? this.jogoData.desenvolvedora :'', [Validators.required]),
      imagem: new FormControl( ''),
      lancamento:new FormControl(this.jogoData ? this.jogoData.lancamento : ''),
      genero: new FormControl(this.jogoData ? this.jogoData.genero : '')
    });
  }

  get nome(){
    return this.jogoForm.get('nome')!;
  }

  get desenvolvedora(){
    return this.jogoForm.get('desenvolvedora')!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0]

    this.jogoForm.patchValue({imagem : file})
  }

  submit(){
    console.log('Enviou o formulário')
    if(this.jogoForm.invalid){
      return;
    }

    console.log(this.jogoForm.value)

    this.onSubmit.emit(this.jogoForm.value);
  }
}
