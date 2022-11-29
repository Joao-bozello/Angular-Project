import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { JogoService } from 'src/app/services/jogo.service';

import { MessagesService } from 'src/app/services/messages.service';

import { Jogo } from 'src/app/Jogo';

import { environment } from 'src/environments/environment';

import { faTimes, faEdit, faE } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  jogo ?: Jogo;
  baseApiUrl = environment.baseApiUrl

  faTimes = faTimes
  faEdit = faEdit

  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ){}

  ngOnInit(){

    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.jogoService.getJogo(id)
    .subscribe((item) => (this.jogo = item.data));

  }

  async removeHandler(id: number){
    await this.jogoService.removeJogo(id).subscribe();

    this.messagesService.add("Jogo excluido com sucesso!");

    this.router.navigate(['/']);
  }

}
