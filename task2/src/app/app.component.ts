import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AppService } from './app.service';
import { Widget } from './utils/widget.abstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  public componentList: Widget[] = null;
  public isLoading: boolean = true;

  private loadWidgetsSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private appService: AppService,
  ) {

  }

  public ngOnInit(): void {
    this.loadWidgetsSubject
      .pipe(
        switchMap(() => this.appService.getWidgets()),
        catchError(() => of([]))
      )
      .subscribe(
        (res) => {
          this.componentList = res;
          this.isLoading = false;
        }
      );
  }

  public onLoadWidgets(): void {
    this.isLoading = true;
    this.loadWidgetsSubject.next(true);
  }
}
