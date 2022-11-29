import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { EditJogoComponent } from './components/pages/edit-jogo/edit-jogo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JogoComponent } from './components/pages/jogo/jogo.component';
import { NewJogoComponent } from './components/pages/new-jogo/new-jogo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projectJogos/new', component: NewJogoComponent},
  {path: 'projectJogos/:id', component: JogoComponent},
  {path: 'projectJogos/edit/:id', component: EditJogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
