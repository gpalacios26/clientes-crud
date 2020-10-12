import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { GLOBAL } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  public page: number = 1;
  public clientes: Cliente[];
  public status: string;
  public url: string;

  constructor(
    private _clienteService: ClienteService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this._clienteService.getClientes().subscribe(
      response => {
        if (response.estado =='1') {
          this.status = 'success';
          this.clientes = response.clientes;
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  delete(id) {
    // Muestro Confirmación
    Swal.fire({
      title: 'Alerta',
      text: 'Deseas eliminar el registro seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ACEPTAR',
      cancelButtonText: 'CANCELAR'
    }).then((result) => {
      if (result.value) {
        this._clienteService.deleteCliente(id).subscribe(
          response => {
            if (response.estado == '1') {
              this.status = 'success';

              // Muestro alerta
              Swal.fire({
                title: 'Cliente eliminado!!!',
                text: 'El cliente se ha eliminado correctamente',
                icon: 'success'
              });

              // Cargamos los clientes
              this.getClientes();
            } else {
              this.status = 'error';
            }
          },
          error => {
            console.log(error);
            this.status = 'error';
          }
        );
      }
    });
  }

}
