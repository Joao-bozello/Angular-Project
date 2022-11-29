import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewJogoComponent } from './components/pages/new-jogo/new-jogo.component';
import { JogoFormComponent } from './components/jogo-form/jogo-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesComponent } from './components/messages/messages.component';
import { JogoComponent } from './components/pages/jogo/jogo.component';
import { EditJogoComponent } from './components/pages/edit-jogo/edit-jogo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewJogoComponent,
    JogoFormComponent,
    MessagesComponent,
    JogoComponent,
    EditJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
