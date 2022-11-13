import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'rXknxpPhRkp5imnb77scKOTzwpQLIiNc';
  private servicioURL: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    this._historial = JSON.parse( localStorage.getItem("historial") ! ) || [];
    // si existe elementos en localStorage
    /* if( localStorage.getItem("historial") ) {
      this._historial = JSON.parse( localStorage.getItem("historial") ! );
    } */

    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
  }

  get historial() {
    return [...this._historial ];
  }

  buscarGifs( query: string = '') {

    query = query.trim().toLowerCase();
    this._historial.unshift(query);

    //Para elementos no repetidos
    this._historial = [ ...new Set(this._historial)];

    // Limitando solo 10 elementos
    //this._historial = this._historial.splice(0,9);
    if( this._historial.length > 10) {
      this._historial.pop();
    }
    localStorage.setItem('historial', JSON.stringify( this._historial ));
    this.consumoApi(query);

  }


  consumoApi( query: string ) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    /* Vamos a trabajar con Observables que son una opcion a las promesas */
    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, { params })
      .subscribe( (res: SearchGifsResponse) => {
        this.resultados = res.data;
        localStorage.setItem('resultados', JSON.stringify(res.data));
      })

  }

}
