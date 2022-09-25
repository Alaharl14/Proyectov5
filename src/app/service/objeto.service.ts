import { ObjetoBuscarComponent } from './../page/objeto/objeto-buscar/objeto-buscar.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Objeto } from '../model/objeto';
import { Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  url: string = "http://localhost:5000/objeto"
  private listaCambio = new Subject<Objeto[]>()
  private ConfirmaEliminacion=new Subject<Boolean>()
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
  modificar(objeto: Objeto)
  {
    return this.http.put(this.url+"/"+objeto.id, objeto);
  }
  listarId(id: number)
  {
    return this.http.get<Objeto>(`${this.url}/${id}`);
  }
  eliminar(id:number)
  {
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion()
  {
    return this.ConfirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:boolean)
  {
    this.ConfirmaEliminacion.next(estado);
  }
  buscar(texto:string)
  {
    if(texto.length!=0)
    {
      return this.http.post<Objeto[]>(`${this.url}/buscar`, texto.toLowerCase(),{}); 
    }
    return EMPTY;
  }
  

}