import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteNewComponent } from './components/cliente-new/cliente-new.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ErrorComponent,
    HomeComponent,
    ClienteNewComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    NgxPaginationModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
