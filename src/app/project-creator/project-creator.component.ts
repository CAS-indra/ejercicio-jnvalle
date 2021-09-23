import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../data/global.service';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss']
})
export class ProjectCreatorComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(fb: FormBuilder, private service: TransaccionesService, private global: GlobalService) {
    this.formGroup = fb.group({
      name: ['Apgar un volcan', [Validators.required, Validators.minLength(3)]],
      budget: new FormControl(10,[Validators.required, Validators.min(10), Validators.max(1000)]),
      startDate: new Date()
    });
  }

  ngOnInit(): void {
  }

  public submitProject(): void{
    console.log('Enviando...');
    console.log(this.formGroup.value);
    // To Do: Llamar al servicio y hacer el post
    this.service.postProyecto$(this.formGroup.value).subscribe({
      error: err => {
        console.log(err.message);
        // this.global.message = err.message;
        this.global.setMessage(err.message);
      }
    });
  }

}
