import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public projectId = '';
  public project = { name: 'New Transaction', description: 'New transaction new', kind: '', amount: 0 }

  constructor(private route: ActivatedRoute, private service: TransaccionesService) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    // const projects = this.service.getTransacciones();
    // this.project = projects.find(p => p.id === this.projectId);
  }

}
