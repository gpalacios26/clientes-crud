// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes que voy a generar su pagina
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteNewComponent } from './components/cliente-new/cliente-new.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ErrorComponent } from './components/error/error.component';

// Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'crear-cliente', component: ClienteNewComponent },
    { path: 'editar-cliente/:id', component: ClienteEditComponent },
    { path: '**', component: ErrorComponent }
];

// Exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);