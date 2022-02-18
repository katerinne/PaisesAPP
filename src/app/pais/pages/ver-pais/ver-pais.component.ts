import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatdeRoute: ActivatedRoute,
    private paisService: PaisService
    ) {}

  ngOnInit(): void {

    this.activatdeRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
      )
      .subscribe (pais => this.pais = pais[0]);

    //this.activatdeRoute.params
    //.subscribe( ({id}) => {
    //  console.log( id );
//
//
    //  this.paisService.getPaisPorAlpha( id )
    //  .subscribe(pais => {
    //    console.log('pais');
    //  });
//
    //})
  }

}
