import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public message = '';
  private message$ = new Subject<string>();

  constructor() { }

  public setMessage(message: string) {
    this.message$.next(message);
  }

  public getMessage$() : Observable<string> {
    return this.message$.asObservable();
  }
}
