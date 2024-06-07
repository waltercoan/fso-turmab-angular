import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  public listaClientes:Cliente[] = [];

  constructor(private service:ClienteService,
              private router:Router
              ) {
  }
  btnNovo(){
    this.router.navigate(['/form-cliente'])
  }


  btnAlterar(cliente:Cliente){
    this.router.navigate(['/form-cliente',cliente.id])
  }
  ngOnInit(): void {
    
    this.service.getClientes().subscribe(res =>{
      this.listaClientes = res;
    })
  }
}
