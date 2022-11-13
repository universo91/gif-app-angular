import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]

})
export class GifsModule { }
