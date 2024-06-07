import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = "http://localhost:8081/api/v1/clientes";

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.apiURL);
  }
  saveCliente(cliente:Cliente){
    if(cliente.id == 0){
      return this.http.post(this.apiURL,cliente);
    }else{
      return this.http.put(`${this.apiURL}/${cliente.id}`,cliente);
    }
  }
  getClienteById(id:String){
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }
}
