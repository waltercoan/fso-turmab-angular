import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

const routes: Routes = [
  //{path: 'clientes/:teste', component: ClientesComponent}
  {path: 'clientes', component: ClientesComponent},
  {path: 'form-cliente', component: FormClienteComponent},
  {path: 'form-cliente/:id', component: FormClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
