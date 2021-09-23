import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suscribir',
  templateUrl: './suscribir.component.html',
  styleUrls: ['./suscribir.component.scss']
})
export class SuscribirComponent implements OnInit {
  @Output() public subscribe = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  public onSubscribeClick(){
    console.log("quiero suscribirme");
    this.subscribe.next();
  }

}
