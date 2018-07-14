import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private collection: Set<string> = new Set();

  constructor() { }

  public getComponents(): Observable<string[]> {
    return of([]);
  }
}
