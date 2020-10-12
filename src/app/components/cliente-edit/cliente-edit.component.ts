import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { GLOBAL } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  providers: [ClienteService]
})
export class ClienteEditComponent implements OnInit {

  public cliente: Cliente;
  public status: string;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    // Cargamos el cliente
    this.getCliente();
  }

  getCliente() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._clienteService.getCliente(id).subscribe(
        response => {
          this.cliente = new Cliente(null, null, null, null, null, null, null, null);
          if (response.estado == '1') {
            this.cliente = response.cliente;
          } else {
            this._router.navigate(['/clientes']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/clientes']);
        }
      );
    });
  }

  onSubmit(form) {
    let selector = document.querySelector('#archivo');
    let archivo = selector.getAttribute('data-archivo');
    let formato = selector.getAttribute('data-formato');
    this._clienteService.updateCliente(this.cliente, archivo, formato).subscribe(
      response => {
        if (response.estado == '1') {
          this.status = 'success';
          // Limpiar el formulario
          form.reset();
          // Redireccionar a la pantalla clientes
          this._router.navigate(['/clientes']);
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

  handleUpload(event) {
    let file = event.target.files[0];
    let selector = document.querySelector('#archivo');

    let fileSize = file.size;
    if (fileSize <= 3000000) {
      let fileName = file.name;
      let fileArray = fileName.split(".");
      let fileExtension = fileArray[1];
      if (fileExtension == 'jpg' || fileExtension == 'JPG' || fileExtension == 'png' || fileExtension == 'PNG') {
        // Obtener el base64 del archivo
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let dataURLFile = (reader.result).toString();
          let base64Result = dataURLFile.split(',')[1];

          selector.setAttribute('data-archivo', base64Result);
          selector.setAttribute('data-formato', fileExtension);
        };
      } else {
        // Muestro alerta
        Swal.fire({
          title: 'Archivo Incorrecto!!!',
          text: 'Los formatos aceptados son: JPG - PNG',
          icon: 'warning'
        });

        event.srcElement.value = null;
        selector.setAttribute('data-archivo', '');
        selector.setAttribute('data-formato', '');
      }
    } else {
      // Muestro alerta
      Swal.fire({
        title: 'Archivo Incorrecto!!!',
        text: 'Los archivos deben tener un peso máximo de 3MB',
        icon: 'warning'
      });

      event.srcElement.value = null;
      selector.setAttribute('data-archivo', '');
      selector.setAttribute('data-formato', '');
    }
  }

}
