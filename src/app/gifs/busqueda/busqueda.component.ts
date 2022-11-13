import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  /* txtBuscar hace referencia al input #txtBuscar */
  @ViewChild('txtBuscar') txtBuscar ! : ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService){}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if ( valor.trim().length == 0) return ;
    this.gifService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }


}
