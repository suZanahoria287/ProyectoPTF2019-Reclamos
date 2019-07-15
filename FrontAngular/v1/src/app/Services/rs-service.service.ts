import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {
 
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/ReclamoSugerencia'


  crearReclamo(rs:ReclamoSugerencia){
  	return this.http.post<ReclamoSugerencia>(this.url,rs);
  }

  getReclamo(id:number){
    return this.http.get<ReclamoSugerencia>(this.url + "/" + id);
  }
}