import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegisterFormComponent } from './register-form.component';

@NgModule({
	declarations: [RegisterFormComponent],
	imports: [
		ReactiveFormsModule,
		CommonModule,
		FormsModule,
	],
	exports: [
		RegisterFormComponent
	]
})
export class RegisterFormModule {

}