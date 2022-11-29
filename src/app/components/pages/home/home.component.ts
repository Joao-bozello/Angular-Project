import { Component, OnInit } from '@angular/core';

import { JogoService } from 'src/app/services/jogo.service';

import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Jogo } from 'src/app/Jogo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  todosJogos: Jogo[] = []
  jogos: Jogo[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = '';
  //todo search

  constructor(
    private jogoService: JogoService
    ){}

    ngOnInit(): void{
      this.jogoService.getJogos().subscribe((items) =>{
        
        const data = items.data

        data.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
        });

        this.todosJogos = data;
        this.jogos = data;
      })
    }

    search(e: Event): void{
      
      const target = e.target as HTMLInputElement
      const value = target.value

      this.jogos = this.todosJogos.filter(jogos => {
        return jogos.nome.toLowerCase().includes(value);
      });
    }
}
