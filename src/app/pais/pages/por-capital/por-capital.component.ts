import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;
  capitales: Country [] = [];
  capitalesSugeridas: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino : string){
    this.hayError=false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe( capitales=>{
      this.capitales=capitales;

    },(err)=>{
      this.hayError=true;
      this.capitales=[];
    });
  }

  sugerencias(termino: string){
    this.hayError =  false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarCapital(termino)
    .subscribe(
      capitales => this.capitalesSugeridas = capitales.splice(0,5),
      (err) => this.capitalesSugeridas = []);

  }

  buscarSugerido(termino: string){
    this.buscar(termino);


  }



}
