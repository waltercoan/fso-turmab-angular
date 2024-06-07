import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css'
})
export class FormClienteComponent {
    cliente:Cliente = new Cliente();
    id:String = "";

    constructor(private clienteService:ClienteService,
                private router:Router,
                private activateRoute:ActivatedRoute){

    }
    salvar(){
      this.clienteService.saveCliente(this.cliente).subscribe(res => {
        this.router.navigate(['/clientes'])
      })
    }
    ngOnInit(): void {
      this.id = this.activateRoute.snapshot.params['id']
      if(this.id != undefined){
        this.clienteService.getClienteById(this.id).subscribe( res =>{
          this.cliente = res
        })
      }
    }
}
