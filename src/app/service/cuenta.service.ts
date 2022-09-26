import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cuenta } from '../model/cuenta';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  url: string = "http://localhost:5000/cuenta"
  private listaCambio = new Subject<Cuenta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cuenta[]>(this.url);
  }
  insertar(cuenta: Cuenta) {
    return this.http.post(this.url, cuenta);
  }
  setLista(listaNueva: Cuenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(cuenta: Cuenta) {
    return this.http.put(this.url + "/" + cuenta.id, cuenta);
  }
  listarId(id: number) {
    return this.http.get<Cuenta>(`${this.url}/${id}`);
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
      return this.http.post<Cuenta[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
