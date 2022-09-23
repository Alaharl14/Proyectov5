import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cuenta } from '../model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  url: string = "http://localhost:5000/cuenta"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cuenta[]>(this.url);
  }
}
