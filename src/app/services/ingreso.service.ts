import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const dominio = environment.apiUrl;
const httpHeader = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) { }

  saveNota(datos): Observable<any>{
    let url = dominio + "/ingreso";
    return this.http.post(url, datos, httpHeader);
  }

  getNotas(): Observable<any>{
    let url = dominio + "/consulta";
    return this.http.get(url, httpHeader);
  }
}
