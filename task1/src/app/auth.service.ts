import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessRoles: string[] = [
    'admin',
    'sudo',
    'pro',
    'user',
    'middle'
  ];

  private currentRole: BehaviorSubject<string> = new BehaviorSubject(this.getRandomRole());

  constructor() { }

  public getCurrentUserRole(): Observable<string> {
    return this.currentRole;
  }

  public changeRole(): void {
    this.currentRole.next(this.getRandomRole());
  }

  private getRandomRole(): string {
    return this.accessRoles[Math.floor(Math.random() * this.accessRoles.length)];
  }
}
