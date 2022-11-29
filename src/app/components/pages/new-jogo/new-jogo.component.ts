import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/Jogo';

import { JogoService } from 'src/app/services/jogo.service';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-jogo',
  templateUrl: './new-jogo.component.html',
  styleUrls: ['./new-jogo.component.css']
})
export class NewJogoComponent {
  btnText = 'Adicionar'

  constructor(
    private jogoService: JogoService,
    private messageService : MessagesService,
    private router: Router
    ){ }

  async createHandler(jogo: Jogo){
    const formData = new FormData()

    formData.append("nome", jogo.nome)
    formData.append("desenvolvedora", jogo.desenvolvedora)

    if(jogo.imagem){
      formData.append("imagem", jogo.imagem);
    }

    formData.append("lancamento",  jogo.lancamento)
    formData.append("genero", jogo.genero)

    //todo

    await this.jogoService.createJogo(formData).subscribe();

    this.messageService.add('Jogo adicionado com sucesso')

    this.router.navigate(['/'])

  }
}
