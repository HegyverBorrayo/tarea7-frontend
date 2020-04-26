import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngresoNotaComponent } from './components/ingreso-nota/ingreso-nota.component';
import { ListadoNotaComponent } from './components/listado-nota/listado-nota.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    IngresoNotaComponent,
    ListadoNotaComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,

    MatInputModule,
    MatIconModule,
    MatFormFieldModule,

    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,

    MatPaginatorModule,    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
