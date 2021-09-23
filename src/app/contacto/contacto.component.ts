import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public suscriptores = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public addSuscriptor(){
    this.suscriptores++;
  }
}
