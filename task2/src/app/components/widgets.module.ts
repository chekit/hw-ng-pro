import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetThreeComponent } from './widget-three/widget-three.component';
import { WidgetFourComponent } from './widget-four/widget-four.component';
import { WidgetFiveComponent } from './widget-five/widget-five.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
    WidgetFiveComponent
  ],
  exports: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
    WidgetFiveComponent
  ],
  entryComponents: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
    WidgetFiveComponent
  ]
})
export class ComponentsModule { }
