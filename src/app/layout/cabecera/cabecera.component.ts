import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  public empresa = 'CAS-indra';
  public practica = 'Practica Javier Navarro del Valle'
  constructor() { }

  ngOnInit(): void {
  }

}
