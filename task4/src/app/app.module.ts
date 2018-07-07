import { CommonModule } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { RegisterFormComponent } from './register-form/register-form.component';
// @TODO: uncomment when check
// import { CheckFormComponent } from './check-form/check-form.component';

@NgModule({
  // @TODO: uncomment when check
  declarations: [RegisterFormComponent/* , CheckFormComponent */],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  entryComponents: [RegisterFormComponent],
  // @TODO: uncomment when check
  // bootstrap: [CheckFormComponent]
})
export class AppModule {
  // @TODO: comment all when check  
  constructor(
    private injector: Injector
  ) {
    const registerForm = createCustomElement(RegisterFormComponent, { injector });
    customElements.define('custom-register-form', registerForm);
  }

  ngDoBootstrap() { }
}
