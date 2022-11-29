import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Jogo } from 'src/app/Jogo';

import { JogoService } from 'src/app/services/jogo.service';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-jogo',
  templateUrl: './edit-jogo.component.html',
  styleUrls: ['./edit-jogo.component.css']
})
export class EditJogoComponent {

  jogo!: Jogo
  btnText: string = 'Editar';

  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ){}

  ngOnInit(){

    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.jogoService.getJogo(id).subscribe(item => {
      this.jogo = item.data;
    })
  }

  async editHandler(jogoData: Jogo){
    const id = this.jogo.id;

    const formData = new FormData();

    formData.append('nome', jogoData.nome);
    formData.append('desenvolvedora', jogoData.desenvolvedora);

    if(jogoData.imagem){
      formData.append('imagem', jogoData.imagem)
    };

    await this.jogoService.updateJogo(id!, formData).subscribe();

    this.messagesService.add(`Jogo ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
