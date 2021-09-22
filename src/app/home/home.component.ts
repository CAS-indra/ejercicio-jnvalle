import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  public count = 0;
  public value = 0;
  public result = 0;
  public transacciones:any[] = [];

  constructor(private route: ActivatedRoute, private service: TransaccionesService) {

    // const transacciones: Observable<any[]> = service.getProjectos();

    // transacciones.subscribe(
    //   data => console.log(data),
    //   err => console.error(err),
    //   () => console.log('THE END')
    // );

    // console.log('hola');

    // transacciones.subscribe({
    //   next: data => console.log(data),
    //   error: err => console.error(err),
    //   complete: () => console.log('THE END')
    // });
  }

  ngOnInit(): void{
    this.service.getProjects$().subscribe(data => this.transacciones = data);
  }

  public incremento(): number {
    return this.count++;
  }

  public suma(arg: number, type: string): number {

    switch(type){
      case "spent":
        this.result = this.result - arg;
        break;
      case "income":
        this.result = this.result + arg;
        break;

    }
    return this.result;
  }

  public projectID = '';
  //public project$: Observable<any>;

}
