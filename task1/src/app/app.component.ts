import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentRole$: Observable<string> = null;

  constructor(
    private authService: AuthService
  ) {

  }

  public ngOnInit(): void {
    this.currentRole$ = this.authService.getCurrentUserRole();
  }

  public onChangeRole(): void {
    this.authService.changeRole();
  }
}
