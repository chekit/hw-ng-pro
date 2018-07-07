import { Component } from '@angular/core';

// @TODO: uncomment when check
// @Component({
// 	selector: 'app-root',
// 	template: `
// 		<button (click)="changeMod()">Change Mod</button>
// 		<custom-register-form [type]="formType" (formStatus)="onFormStatusChange($event)"></custom-register-form>
// 	`
// })
export class CheckFormComponent {
	public formType = 'full';

	public onFormStatusChange(state): void {
		console.log(state)
	}

	changeMod(): void {
		this.formType = this.formType === 'full' ? 'min' : 'full';
	}
}