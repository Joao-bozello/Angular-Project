import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Jogo } from '../Jogo';

import { environment } from 'src/environments/environment';

import { Response } from '../Response';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private baseApiUrls  = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrls}api/jogos`;

  constructor(private http: HttpClient) { }

  getJogos(): Observable<Response<Jogo[]>>{
    return this.http.get<Response<Jogo[]>>(this.apiUrl);
  }

  getJogo(id: number): Observable<Response<Jogo>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Jogo>>(url);
  }

  createJogo(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeJogo(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateJogo(id: number, formData: FormData): Observable<FormData>{

    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData); 

  }
}
