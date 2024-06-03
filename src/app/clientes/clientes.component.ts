import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  public listaClientes:Cliente[] = [];

  constructor(private service:ClienteService) {
  }

  ngOnInit(): void {
    this.service.getClientes().subscribe(res =>{
      this.listaClientes = res;
    })
  }
}
