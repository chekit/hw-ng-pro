import { CommonModule } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  entryComponents: [RegisterFormComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const registerForm = createCustomElement(RegisterFormComponent, { injector });
    customElements.define('custom-register-form', registerForm);
  }

  ngDoBootstrap() { }
}
