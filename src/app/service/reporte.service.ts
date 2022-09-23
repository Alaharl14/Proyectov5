import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reporte } from '../model/reporte';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url: string = "http://localhost:5000/reporte"
  private listaCambio = new Subject<Reporte[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Reporte[]>(this.url);
  }
  insertar(reporte: Reporte) {
    return this.http.post(this.url, reporte);
  }
  setLista(listaNueva: Reporte[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(reporte: Reporte) {
    return this.http.put(this.url + "/" + reporte.id, reporte);
  }
  listarId(id: number) {
    return this.http.get<Reporte>(`${this.url}/${id}`);
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
      return this.http.post<Reporte[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
