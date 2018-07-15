import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { WidgetOneComponent } from './components/widget-one/widget-one.component';
import { WidgetTwoComponent } from './components/widget-two/widget-two.component';
import { WidgetThreeComponent } from './components/widget-three/widget-three.component';
import { WidgetFourComponent } from './components/widget-four/widget-four.component';
import { WidgetFiveComponent } from './components/widget-five/widget-five.component';
import { Widget } from './utils/widget.abstract';
import { delay, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private collection: Set<Widget> = new Set();

  constructor() {
    this.collection.add(WidgetOneComponent);
    this.collection.add(WidgetTwoComponent);
    this.collection.add(WidgetThreeComponent);
    this.collection.add(WidgetFourComponent);
    this.collection.add(WidgetFiveComponent);
  }

  public getWidgets(): Observable<Widget[]> {
    return of(Array.from(this.collection))
      .pipe(
        delay(1500),
        map((widgets: Widget[]) => widgets
          .filter((w, i) => i % this.getRandomNumber(this.collection.size) === 0)
        )
      );
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
