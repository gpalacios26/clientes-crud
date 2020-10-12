import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class ClienteService {

    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getClientes(): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url + 'clientes/listar', { headers: headers });
    }

    getCliente(clienteId): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url + 'clientes/obtener/' + clienteId, { headers: headers });
    }

    createCliente(cliente, archivo, formato): Observable<any> {
        let objCliente = { 'cliente': cliente, 'archivo': archivo, 'formato': formato };
        let params = JSON.stringify(objCliente);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.post(this.url + 'clientes/crear', params, { headers: headers });
    }

    updateCliente(cliente, archivo, formato): Observable<any> {
        let objCliente = { 'cliente': cliente, 'archivo': archivo, 'formato': formato };
        let params = JSON.stringify(objCliente);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url + 'clientes/actualizar', params, { headers: headers });
    }

    deleteCliente(clienteId): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.delete(this.url + 'clientes/eliminar/' + clienteId, { headers: headers });
    }
}