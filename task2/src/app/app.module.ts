import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/widgets.module';
import { AppService } from './app.service';
import { HostDirective } from './utils/host.directive';
import { CommonModule } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HostDirective,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CommonModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
