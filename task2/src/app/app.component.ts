import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild, Renderer2, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { WidgetFourComponent } from './components/widget-four/widget-four.component';
import { HostDirective } from './utils/host.directive';
import { WidgetOneComponent } from './components/widget-one/widget-one.component';
import { Widget } from './utils/widget.abstract';
import { Subject, BehaviorSubject, Subscription, of, Observable } from 'rxjs';
import { switchMap, catchError, startWith, tap, map } from 'rxjs/operators';

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

  @ViewChild(HostDirective) private host: HostDirective;

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
