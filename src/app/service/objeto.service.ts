import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Objeto } from '../model/objeto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  url: string = "http://localhost:5000/objeto"
  private listaCambio = new Subject<Objeto[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Objeto[]>(this.url);
  }

  insertar(objeto: Objeto) {
    return this.http.post(this.url, objeto);
  }

  setLista(listaNueva: Objeto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}