import { Component} from '@angular/core';

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.css'],
  styles: [
    `
    li {
      cursor:pointer;
    }
    `
  ]
})

export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name:"Inicio" , router:"", icon:"home"},
    {name:"Buscar país" , router:"", icon:"explore"},
    {name:"Por region" , router:"region", icon:"search"},
    {name:"Buscar capital" , router:"capital", icon:"travel_explore"},
    {name:"Sobre el proyecto" , router:"info", icon:"perm_device_information"},
  ];


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}
