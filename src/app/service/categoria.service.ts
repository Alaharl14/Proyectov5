import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria } from '../model/categoria';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url: string = "http://localhost:5000/categoria"
  private listaCambio = new Subject<Categoria[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Categoria[]>(this.url);
  }
  insertar(categoria: Categoria) {
    return this.http.post(this.url, categoria);
  }
  setLista(listaNueva: Categoria[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(categoria: Categoria) {
    return this.http.put(this.url + "/" + categoria.id, categoria);
  }
  listarId(id: number) {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Categoria[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
